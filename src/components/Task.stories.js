import React from 'react'
import Task from './Task'

export default {
    component: Task,
    title: 'Task',
}

const Template = args => <Task  {...args} />

export const Default = Template.bind({})
Default.args = {
    task: {
        id: 1,
        title: 'test task',
        state: 'TASK_INBOX'
    }

}
export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};
export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
export const LongText = Template.bind({})
LongText.args = {
  task: {
    title:'lorem fdfkd fsdjf fsdfj sdkfjfd kf f fjdkffj dfdkdsjflkdjfkdlorem fdfkd fsdjf fsdfj sdkfjfd kf f fjdkffj dfdkdsjflkdjfkdlorem fdfkd fsdjf fsdfj sdkfjfd kf f fjdkffj dfdkdsjflkdjfkdlorem fdfkd fsdjf fsdfj sdkfjfd kf f fjdkffj dfdkdsjflkdjfkdlorem fdfkd fsdjf fsdfj sdkfjfd kf f fjdkffj dfdkdsjflkdjfkdlorem fdfkd fsdjf fsdfj sdkfjfd kf f fjdkffj dfdkdsjflkdjfkd'
  },
};