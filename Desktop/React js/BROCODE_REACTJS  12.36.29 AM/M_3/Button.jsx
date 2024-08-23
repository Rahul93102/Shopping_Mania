import styles from './Button.module.css'; // external css file default file format is .module.css
function Button() { 
    // const styles = {
    //         backgroundColor: "hsl(200, 100%, 50%)",
    //         color: "white",
    //         padding:" 10px 20px",
    //         borderRadius: "5px",
    //         border:"none",
    //         cursor:"pointer",
    // }

            
    return (
        <button className={styles.button}>click me</button> 
        // <button style = {styles} >click me </button>


    );
}

export default Button;
