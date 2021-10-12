const User = require("./../models/UserModel");

exports.createUser = async (req, res) => {
  try {
  
    const newUser = { fullName, displayName, email, password, phoneNumber, city, address, zipcode} = req.body;


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


      res.send(newUser);

  } catch(err) {

    console.error("Register:", err);
    res.status(500).send();
  }

  //   const user = new User(newUser);
  //   user.save().then(user => res.json(user));
/*   const user = await new User(newUser);
  user.save();
  res.status(200).json(user); */
};
