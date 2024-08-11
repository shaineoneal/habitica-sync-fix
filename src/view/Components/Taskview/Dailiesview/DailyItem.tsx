import * as React from "react";
import DailySubTasks from "./DailySubTasks";
import renderMarkdown from "../markdownRender";

function DailyItem(props: any) {
    var text_html = renderMarkdown(props.daily_text);

    if (props.daily_notes) {
        var note_html = renderMarkdown(props.daily_notes);
    }
    
    return (
        <div className="todo-item" id={props.id}>
            <input type="checkbox" className="checkbox" id={props.id} onChange={props.onChange} checked={props.completed} />
            <div>
                <p><span dangerouslySetInnerHTML={{__html: text_html}}></span></p>
                <div className="description" dangerouslySetInnerHTML={{__html: note_html}}></div>
                {/* {console.log(props.checklist)} */}
                <DailySubTasks key={props.daily_subtasks.id} subtasks={props.daily_subtasks} onChangeChecklistItem={props.onChangeChecklistItem}></DailySubTasks>
            </div>

        </div>
    )
}

export default DailyItem