package com.example.a1_xml

import android.os.Bundle
import android.widget.*
import androidx.activity.ComponentActivity
import androidx.compose.ui.platform.ComposeView
import java.io.BufferedReader
import java.io.InputStreamReader
import com.example.a1_xml.Stop

class MainActivity : ComponentActivity() {

    private lateinit var stops: List<Stop>
    private var currentStopIndex = 0
    private var isMiles = false
    private var isLazyView = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val listViewStops = findViewById<ListView>(R.id.listView_stops)
        val tvTotalDistanceTraveled = findViewById<TextView>(R.id.tv_total_distance_traveled)
        val tvTotalDistanceRemaining = findViewById<TextView>(R.id.tv_total_distance_remaining)
        val tvProgress = findViewById<TextView>(R.id.tv_progress)
        val progressBar = findViewById<ProgressBar>(R.id.progress_bar)
        val btnToggleUnit = findViewById<Button>(R.id.btn_toggle_unit)
        val btnNextStop = findViewById<Button>(R.id.btn_next_stop)
        val switchView = findViewById<Switch>(R.id.switch_view)
        val composeView = findViewById<ComposeView>(R.id.compose_view)


        stops = loadStopsFromFile()
        if (stops.isEmpty()) {
            tvTotalDistanceTraveled.text = "No stops available"
            tvTotalDistanceRemaining.text = "No stops available"
            tvProgress.text = "Progress: 0%"
            progressBar.progress = 0
            return
        }


        updateUI(tvTotalDistanceTraveled, tvTotalDistanceRemaining, tvProgress, progressBar, listViewStops, composeView)

        btnToggleUnit.setOnClickListener {
            isMiles = !isMiles
            btnToggleUnit.text = if (isMiles) "Switch to KM" else "Switch to Miles"
            updateUI(tvTotalDistanceTraveled, tvTotalDistanceRemaining, tvProgress, progressBar, listViewStops, composeView)
        }

        btnNextStop.setOnClickListener {
            if (currentStopIndex < stops.size - 1) {
                currentStopIndex++
                updateUI(tvTotalDistanceTraveled, tvTotalDistanceRemaining, tvProgress, progressBar, listViewStops, composeView)
            } else {
                Toast.makeText(this, "Destination Arrived!", Toast.LENGTH_LONG).show()
            }
        }

        switchView.setOnCheckedChangeListener { _, isChecked ->
            isLazyView = isChecked
            updateUI(tvTotalDistanceTraveled, tvTotalDistanceRemaining, tvProgress, progressBar, listViewStops, composeView)
        }
    }

    private fun updateUI(
        tvTotalDistanceTraveled: TextView,
        tvTotalDistanceRemaining: TextView,
        tvProgress: TextView,
        progressBar: ProgressBar,
        listViewStops: ListView,
        composeView: ComposeView
    ) {
        if (stops.isNotEmpty()) {
            val totalDistance = stops.sumOf { it.distance }
            val coveredDistance = stops.take(currentStopIndex + 1).sumOf { it.distance }
            val remainingDistance = totalDistance - coveredDistance

            val unit = if (isMiles) "miles" else "km"
            val conversionFactor = if (isMiles) 0.621371 else 1.0

            val totalDistanceTraveled = coveredDistance * conversionFactor
            val totalDistanceRemaining = remainingDistance * conversionFactor

            tvTotalDistanceTraveled.text = String.format("Total Distance Traveled: %.2f %s", totalDistanceTraveled, unit)
            tvTotalDistanceRemaining.text = String.format("Total Distance Remaining: %.2f %s", totalDistanceRemaining, unit)

            val progress = if (totalDistance > 0) (coveredDistance.toFloat() / totalDistance) * 100 else 0f
            progressBar.progress = progress.toInt()
            tvProgress.text = String.format("Progress: %.2f%%", progress)

            if (!isLazyView) {
                val adapter = ArrayAdapter(
                    this, android.R.layout.simple_list_item_1, stops.mapIndexed { index, stop ->
                        if (index == currentStopIndex) {
                            "➡ ${stop.name}\nVisa: ${stop.visa}, Time: ${stop.time}, Distance: ${stop.distance} $unit"
                        } else {
                            "${stop.name}\nVisa: ${stop.visa}, Time: ${stop.time}, Distance: ${stop.distance} $unit"
                        }
                    }
                )
                listViewStops.adapter = adapter
                listViewStops.visibility = android.view.View.VISIBLE
                composeView.visibility = android.view.View.GONE
            } else {
                listViewStops.visibility = android.view.View.GONE
                composeView.visibility = android.view.View.VISIBLE
                composeView.setContent {
                    JourneyStopsList(stops, !isMiles, currentStopIndex)
                }
            }
        }
    }

    private fun loadStopsFromFile(): List<Stop> {
        val stops = mutableListOf<Stop>()
        try {
            val inputStream = resources.openRawResource(R.raw.stations)
            val reader = BufferedReader(InputStreamReader(inputStream))

            reader.forEachLine { line ->
                val parts = line.split(",").map { it.trim() }
                if (parts.size == 4) {
                    stops.add(Stop(parts[0], parts[1], parts[2].toInt(), parts[3]))
                }
            }
            reader.close()
        } catch (e: Exception) {
            e.printStackTrace()
            Toast.makeText(this, "Error loading stops!", Toast.LENGTH_LONG).show()
        }
        return stops
    }
}
