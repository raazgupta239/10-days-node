
export const loginInputValidate= (req,res,next)=>{
    const {name, password} = req.body;
    if(name==='Raaz' && password ==='Abc'){
        return res.json({
            
                message:"Login Successful"
            });
    
    }
    next();
}

