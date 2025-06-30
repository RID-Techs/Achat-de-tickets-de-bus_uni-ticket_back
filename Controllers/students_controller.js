const { hashPassword, VerifyPassword } = require("../Utils/Auth_Utils");
const generatedId = require("../Utils/random_ID");
const sql = require("../Config/DB_Connect");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    try {
        const { numero_de_carte, email, password, user_role } = req.body;

        // Validation des données réçues
        if (!numero_de_carte || !email || !password || !user_role) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

         const existingUser = await sql`
          select numero_de_carte from utilisateurs where numero_de_carte = ${numero_de_carte}`;
         const existingUser_2 = await sql`
          select email from utilisateurs where email = ${email}`;

    if (existingUser.length > 0) {
      return res.status(409).json({ ErrorMsg: "Utilisateur déjà existant." });
    }
    if (existingUser_2.length > 0) {
      return res.status(409).json({ ErrorMsg: "Email déjà utilisé." });
    }

        const hashedPassword = await hashPassword(password);

        const inserStudent = await sql`
            INSERT INTO utilisateurs (public_id, numero_de_carte, email, mot_de_passe, user_role)
            VALUES (${generatedId}, ${numero_de_carte}, ${email}, ${hashedPassword}, ${user_role})
            RETURNING *;
        `;
       
        if (inserStudent.length === 0) {
          return res.status(500).json({ error: 'Échec de la création de l\'étudiant' });
        }
        
        const newStudent = inserStudent[0];
        // On enregistre le nouvel étudiant dans la base de données
        res.status(201).json({ message: 'Étudiant créé avec succès', student: { numero_de_carte: newStudent.numero_de_carte, email: newStudent.email, user_role: newStudent.user_role } });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
const Login = async (req, res) => {
    try {
        const { numero_de_carte, mot_de_passe } = req.body;

        // Validation des données réçues
        if (!numero_de_carte || !mot_de_passe) {
            return res.status(400).json({ error: 'Tous les champs sont requis' });
        }

         const existingUser = await sql`
          select * from utilisateurs where numero_de_carte = ${numero_de_carte}`;

    if (existingUser.length === 0) {
      return res.status(401).json({ ErrorMsg: "Utilisateur non existant." });
    }

    const user = existingUser[0];

     try {
      await VerifyPassword(user.mot_de_passe, mot_de_passe);
    } catch (err) {
      return res.status(401).json({ ErrorMsg: "Mot de passe incorrect." });
    }

        const jwtSecret = process.env.JWT_SECRET;
    if(!jwtSecret) {
      return res.status(500).json({ ErrorMsg: "JWT secret not found" });
    }

    const token = jwt.sign({ userId: user.public_id, user_role: user.user_role}, jwtSecret, {expiresIn: "2h"})
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 60 * 60 * 2 * 1000,
      path: "/",
    })
    // console.log("Token generated:", token);
    // console.log("User verified:", user);
    
    return res.status(200).json({SuccessMsg: `Bienvenue ${user.email}.`, authenticatedUser: user.numero_de_carte});
    } catch (error) {
        console.error('Error authenticating student:', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}

module.exports = { signUp, Login };