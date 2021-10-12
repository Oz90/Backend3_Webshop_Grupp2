const User = require("./../models/UserModel");
const bcrypt = require('bcryptjs');


exports.createUser = async (req, res) => {
  try {
  
    const { fullName, displayName, email, password, phoneNumber, city, address, zipcode} = req.body;


    // Validations

      if(!fullName || !displayName || !email || !password || !phoneNumber || !address || !city || !zipcode) {
        return res.status(400).json({errorMessage: "Please fill in all required fields"})
      }

       if(password.length < 6) {
        return res.status(400).json({errorMessage: "Please enter a password with at least 6 characters."})
      }

      const existingUser = await User.findOne({email})
      if(existingUser) {
        return res.status(400).json({
          errorMessage: "This email already exists"
        })
      }

      // Hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt)

      const newUser = await new User({
        fullName, 
        displayName, 
        phoneNumber,
        address,
        city,
        zipcode,
        email,
        "password": passwordHash,
      });

      const savedUser = await newUser.save();
      res.status(200).json(savedUser);

  } catch(err) {

    console.error("Register:", err);
    res.status(500).send();
  }


};
