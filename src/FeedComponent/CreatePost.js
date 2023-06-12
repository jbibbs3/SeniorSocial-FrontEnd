import { NineMp } from "@mui/icons-material";
import { border, display, padding } from "@mui/system";
import { useState } from "react";

const CreatePost = () => {
    const styles = {
        postBox: {
            background: "#e4e7eb",
            borderRadius: "15px",
            maxWidth: "475px",
            width: "60%",
            padding: "25px 25px 15px 25px",
            outlineStyle: "solid",
            borderStyle: "solid",
            color: "rgb(150,145,145)",
            marginLeft: "2.4cm",
            marginTop: "20%",
        },

        postInput: {
            paddingTop: ".5%",
            borderBottom: "1px solid #e4e7eb",
        },

        textArea: {
            minHeight: "230%",
        },

        placeholder: {
            marginTop: "1%",
            fontSize: "22px",
            color: "black",
            pointerEvents: "none",
            fontWeight: "bold",
        },
        inputEdit: {
            background: "",
            borderStyle: "solid",
            height: "50%",
            padding: "12% 13% 12% 13%",
            color: "black",
            fontSize: "120%",
            fontWeight: "bold",
            marginLeft: "-12px",
            borderRadius: "5px",
        },

        button: {
            fontSize: "150%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#11bf1d",
            borderStyle: "solid",
            borderRadius: "15px",
            padding: "2% 3% 2% 3%",
        },

        addImageButton: {
            fontSize: "150%",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "red",
            borderStyle: "solid",
            borderRadius: "15px",
            padding: "2% 3% 2% 3%",
            marginRight: "7%",
        },

        buttonContainer: {
            display: "flex",
            marginLeft: "5px",
        },

        text: {
            fontSize: "135%",
            fontWeight: "bold",
        },
    };
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newComment.trim() !== "") {
            const comment = {
                id: comments.length + 1,
                author: "User",
                content: newComment,
                timestamp: new Date().toLocaleString(),
            };

            setComments([...comments, comment]);
            setNewComment("");
        }
    };

    const handleChange = (e) => {
        setNewComment(e.target.value);
    };

    return (
        <div>
            <div className="postBox" style={styles.postBox}>
                <div className="postInput" style={styles.postInput}>
                    <form onSubmit={handleSubmit}>
                        <div className="text-area" style={styles.textArea}>
                            <span className="placeholder" style={styles.placeholder}>
                                Make a Post
                            </span>
                            <textarea
                                value={newComment}
                                onChange={handleChange}
                                style={styles.inputEdit}
                                placeholder="Type Here"></textarea>
                        </div>
                        <div className="b-half">
                            <div className="content">
                                <button style={styles.button}>ADD IMAGE</button>
                                <button style={styles.button}>POST</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
