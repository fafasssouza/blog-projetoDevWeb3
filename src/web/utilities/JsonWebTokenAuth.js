import jwt from "jsonwebtoken";
import UserErrorCode from "../../domain/UserErrorCode.js";
import passwordValidation from "../routes/userLogin/passwordValidation.js";

export default class JwtAuth {
    #userRepository;

    constructor(userRepository) {
        this.#userRepository = userRepository;
    }


    generatePayload = (user) => {
        return jwt.sign(user, process.env.SECRET, { expiresIn: '12h' });
    }

    jwtAauthorization = (req, res, next) => {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token) return res.sendStatus(401)
        
        jwt.verify(token,  process.env.SECRET, async (error, user) => {
            if (error) return res.status(403).send("ACCESS DENIED");

            const dbuser = await this.#userRepository.getByName(user.username);
            if(dbuser == UserErrorCode.THERE_IS_NO_USER)
                return res.status(403).send("ACCESS DENIED");

            if(dbuser && passwordValidation(user.password, dbuser.password)) {
                console.log("ACCESS GRANTED");
                next();
            }
        });
    }

}