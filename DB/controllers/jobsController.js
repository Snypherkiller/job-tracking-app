const createJob = async (req,res) => {
    res.send('Create job')
}
const getAllJob = async (req,res) => {
    res.send('Get all jobs')
}
const deleteJob = async (req,res) => {
    res.send('Delete job')
}
const updateJob = async (req,res) => {
    res.send('Update job')
}
const showStats = async (req,res) => {
    res.send('Show stats')
}


export {createJob,deleteJob,updateJob,getAllJob,showStats}