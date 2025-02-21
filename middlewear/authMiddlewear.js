import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    const token = req.headers.Authorization || req.headers.authorization;
    if (!token || !token.startsWith('Bearer')) {
        console.log('Token is missing or invalid');
        res.status(400).json({ msg: "Token is missing or invalid" });
    }
    else {
        try {
            const t1 = token.split(' ')[1];
            const decode = jwt.verify(t1, process.env.JWT_SECRET_KEY);
            // console.log(decode);
            req.user = decode
            next();
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ msg: "Internal Server error" });
        }
    }
};

const role = (...allowrole)=>{
    return async(req, res, next)=>{
        try {
            if(!req.user){
                return res.status(401).json({ msg: 'User not authenticated' });
            }
            else{
                const role = req.user.role;
            // console.log(role);
            if (!allowrole.includes(req.user.role)) {
                return res.status(403).json({ msg: "You are not authorized" });
            }
            next();
            }
        } catch (error) {
            
        }
    }
}

export {auth, role};