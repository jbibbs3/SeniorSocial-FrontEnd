import { border, display, padding } from "@mui/system"

const CreatePost =()=>{
   const styles={

        postBox:{
            background:"#e4e7eb",
            borderRadius:"15px",
            maxWidth:"475px",
            width:"100%",
            padding: "25px 25px 15px 25px"
        },

        postInput:{
            paddingTop:"10px",
            borderBottom:"1px solid #e4e7eb"
        },

        textArea:{
            minHeight:"230px"
        },

        placeholder:{
            marginLeft: "-7cm",
            marginTop:"3px",
            fontSize:"22px",
            color:"#98a5b1",
            pointerEvents:"none"
        },
        inputEdit:{
            background:""

        }
    }




    return(
        <div className="postBox" style={styles.postBox}>
            <div className="postInput" style={styles.postInput}>
                <div className="text-area" style={styles.textArea}>
                    <span className="placeholder" style={styles.placeholder}>What's Going On</span>
                    <div className="input-edit" contentEditable="true" spellCheck="false" style={styles.inputEdit}></div>
                    <div className="input-read" contentEditable="true" spellCheck="false "></div>
                </div>
                <div className="b-half">
                    <div className="content">
                        <span className="counter">280</span>
                        <button>POST</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreatePost