export const loginUser= (req,res)=>{
    const {email,password}=req.body;
    if(email=="raazgupta958@gmail.com"&& password=='Nepal@123'){
        return res.status(200).json({
            message:"Login Succesfull"
        });
    }
    else{
         return res.status(400).json({
            message:"login failed"
        });
    }
}

export const signupUser = (req,res)=>{
    const {userName,email,password}= req.body;
    if(userName=="Raaz" && email=="raazgupta958@gmail.com"&& password=="Nepal@123"){

        return res.status(201).json({
            message:"Signup Successful"
        });
    } 
    else{
        return res.status(400).json({
            message:"Signup Failed"
        });
    }
}