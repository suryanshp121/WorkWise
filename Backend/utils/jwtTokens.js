export const sendToken=(user,statusCode,response,message)=>{
    const token=user.getJWTToken();
    const options={
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly:true
    };
    response.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        message,
        token,
    });
};