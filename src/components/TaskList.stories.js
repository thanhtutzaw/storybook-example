import TaskList from "./TaskList";
import * as TaskStories from './Task.stories'
export default {
    component:TaskList,
    title : 'TaskList',
    decorators:[story => <div style={{padding:'3rem'}}>{story()}</div>]
}
const Template = args => <TaskList {...args}/>

export const Default = Template.bind({})
Default.args = {
    task:[
        {...TaskStories.Default.args.task, id:1 , title:'Hello World'},
        {...TaskStories.Default.args.task, id:2 , title:'Hello World2'},
        {...TaskStories.Default.args.task, id:3 , title:'fdsfsdfd fdsfd sdfdfds'},
        {...TaskStories.Default.args.task, id:4 , title:'fdsfd fdsfd f sfdsf'},
    ]
}
export const PinnedTask = Template.bind({})
PinnedTask.args = {
    task:[
        ...Default.args.task.slice(0,2),
        {id:3 , title : 'Task 3 (pinned)' , state: 'TASK_PINNED'}
    ]
}
export const Loading = Template.bind({})
Loading.args = {
    task:[],
    loading:true,
}
export const Empty = Template.bind({})
Empty.args = {
    ...Loading.args , 
    loading:false,
}