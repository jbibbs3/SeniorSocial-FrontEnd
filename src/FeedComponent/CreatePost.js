import { NineMp } from "@mui/icons-material"
import { border, display, padding } from "@mui/system"

const CreatePost =()=>{
   const styles={

        postBox:{
            background:"#e4e7eb",
            borderRadius:"15px",
            maxWidth:"475px",
            width:"60%",
            padding: "25px 25px 15px 25px",
            outlineStyle:"solid",
            borderStyle: "solid",
            color: "rgb(150,145,145)",
            marginLeft:"2.4cm"
        },

        postInput:{
            paddingTop:".5%",
            borderBottom:"1px solid #e4e7eb",
            
        },

        textArea:{
            minHeight:"230%",
            
        },

        placeholder:{
            
            marginTop:"1%",
            fontSize:"22px",
            color:"black",
            pointerEvents:"none",
            fontWeight:"bold"
        },
        inputEdit:{
            background:"",
            borderStyle: "solid",
            height:"50%",
            padding: "12% 13% 12% 13%",
            color:"black",
            fontSize:"120%",
            fontWeight:"bold"
            

        },

        button: {
            fontSize:"150%",
            fontWeight:"bold",
            color:"white",
            backgroundColor: "#11bf1d",
            borderStyle: "solid",
            borderRadius:"15px",
            padding: "2% 3% 2% 3%" 
        },


        addImageButton: {
            fontSize:"150%",
            fontWeight:"bold",
            color:"white",
            backgroundColor:"red",
            borderStyle: "solid",
            borderRadius:"15px",
            padding: "2% 3% 2% 3%",
            marginRight:"7%" 
        },

        buttonContainer: {

            display:"flex",

        }
    }




    return(
        <div className="postBox" style={styles.postBox}>
            <div className="postInput" style={styles.postInput}>
                <div className="text-area" style={styles.textArea}>
                    <span className="placeholder" style={styles.placeholder}>Make A Post</span>
                    <div className="input-edit" contentEditable="true" spellCheck="false" style={styles.inputEdit}></div>
                    <div className="input-read" contentEditable="true" spellCheck="false "></div>
                </div>
                <div className="b-half">
                    <div className="content" >
                        <button style={styles.addImageButton}>Add Image</button>
                        <button style={styles.button}>POST</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreatePost