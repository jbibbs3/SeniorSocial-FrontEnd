import { display } from "@mui/system"

const CreatePost =()=>{
   const styles={
        header: {
            fontWeight:"bold",
            color:"blue"
            display:

        }
    }




    return(
        <div className="postBox">
            <div className="postInput">
                <div className="text-area">
                    <span className="placeholder" style={styles.header}>What's Going On</span>
                    <div className="input-edit" contentEditable="true" spellCheck="false"></div>
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