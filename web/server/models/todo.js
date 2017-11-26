import Base from './base'

export default Base.model('todo', {
    title: String,
    status: {
        type: String,
        enum: ['TODO', 'DOING', 'DONE'],
        default: 'TODO'
    },
    date_created: Date
})