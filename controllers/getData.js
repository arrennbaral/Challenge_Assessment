const { default: axios } = require("axios")




const getData = {
    apple: async (req,res) =>{
        try {
            const url=`https://www.fruityvice.com/api/fruit/all`
            const request = await axios.get(url)
            res.send(request.data)
            
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

 
}

module.exports = getData