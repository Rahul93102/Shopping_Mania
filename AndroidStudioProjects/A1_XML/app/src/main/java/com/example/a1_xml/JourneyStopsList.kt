package com.example.a1_xml

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import com.example.a1_xml.Stop
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

@Composable
fun JourneyStopsList(stops: List<Stop>, isKm: Boolean, currentStopIndex: Int) {
    val unit = if (isKm) "km" else "miles"
    val conversionFactor = if (isKm) 1.0 else 0.621371

    LazyColumn(
        modifier = Modifier.fillMaxSize().padding(16.dp)
    ) {
        itemsIndexed(stops) { index, stop ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 8.dp)
                    .background(
                        if (index == currentStopIndex) Color.LightGray else Color.Transparent
                    )
                    .padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (index == currentStopIndex) {
                    Icon(
                        imageVector = Icons.Default.ArrowForward,
                        contentDescription = "Current stop",
                        modifier = Modifier.padding(end = 8.dp)
                    )
                }
                Column(modifier = Modifier.weight(1f)) {
                    Text(text = stop.name, fontWeight = FontWeight.Bold)
                    Text(text = "Visa: ${stop.visa}, Time: ${stop.time}, Distance: ${stop.distance * conversionFactor} $unit")
                }
            }
        }
    }
}
