import "./write.css"


export default function Write () {

    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type = "file" id="fileInput"  style={{display:"none"}}/>

                    <input type ="text" placeholder ="Comment" className="writeInput" autoFocus={true}/>

                </div>
                <div className ="writeFormGroup">
                    <textarea placeholder="write comment here" type="text"  className="writeInput writeText"> </textarea>
                </div>
                <button className="submit">Post</button>
            </form>
        </div>
    )
}