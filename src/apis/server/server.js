const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
// //making the pdf accessible by making it staticc
// app.use("/ansFiles", express.static("ansFiles"))


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET ="GGFDSERTY65GRTJHRTGUHRT9468UT5UTHT9854TU549TH5UTURY9865YU5HGJRTHKJGHT496TRUHGR4EFHH"



const mongoose = require("mongoose");
app.use(express.json());
const mongoUrl =
"mongodb+srv://nermenmorgan99:yEwWPpBj7xntVG80@cluster0.rv6cflq.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to DATABASE");
  })
  .catch((e) => console.log(e));
//   //multer configuration and managing pdfs of answers that clients submit


//Managing Data of clients and owners -USERS-
require("./clientDetails");
require("./ownerDetails");
const Ownerr = mongoose.model("ownerInfo");
const Clientt = mongoose.model("clientInfo");
//signup for both
app.post("/registerOwner", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const encryptedPassword= await bcrypt.hash(password,10)
  try {
    const oldOwner = await Ownerr.findOne({ email });
    if (oldOwner) {
     return res.send({ error: "owner with the same Email address already exists" });
    }
    await Ownerr.create({
      name,
      phone,
      email,
      password:encryptedPassword,
    });
   return res.send({ status: "ok" });
  } catch (e) {
  return  res.send({ status: "error" });
  }
});

app.post("/registerClient", async (req, res) => {
  const { name, email, phone, password } = req.body;
    const encryptedPassword= await bcrypt.hash(password,10)
    try {
      const oldClient = await Clientt.findOne({ email });
      if (oldClient) {
        res.send({ error: "Student with the same Email address already exists" });
      }
      await Clientt.create({
        name,
        phone,
        email,
        password:encryptedPassword,
      });
      res.send({ status: "ok" });
    } catch (e) {
      res.send({ status: "error" });
    }
  });

//login for both
app.post("/login-owner", async (req, res) => {
    const { email, password } = req.body;
    try {
      const owner = await Ownerr.findOne({ email });
      if (!owner) {
        return res.json({ error: "owner not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, owner.password);
      if (!isPasswordValid) {
        return res.json({ error: "Invalid password" });
      }
      const token = jwt.sign({email:owner.email}, JWT_SECRET,{
          expiresIn:7200
      });
      return res.json({ status: "ok", data: token });
    } catch (e) {
      return res.json({ status: "error" });
    }
  });
  app.post("/login-client", async (req, res) => {
    const { email, password } = req.body;
    try {
      const client = await Clientt.findOne({ email });
      if (!client) {
        return res.json({ error: "Client not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, student.password);
      if (!isPasswordValid) {
        return res.json({ error: "Invalid password" });
      }
      const token = jwt.sign({email:student.email}, JWT_SECRET,{
          expiresIn:7200
      });
      return res.json({ status: "ok", data: token });
    } catch (e) {
      return res.json({ status: "error" });
    }
  });
  //Getting owner  and student data for their profile screens
app.post("/ownerData", async(req,res)=>{
    const {token}=req.body;
try {
    const owner =jwt.verify(token,JWT_SECRET,(err,res)=>{
        if(err){return "token expired"}
        return res;
    });
    console.log(owner);
    if(owner=="token expired"){
        return res.send({ status: 'error', data: "token expired" });

    }
    
    const ownerEmail= owner.email;
    Ownerr.findOne({email:ownerEmail}).then(
        (data)=>{
            if (data) {
                res.send({ status: 'ok', data: data });
              } else {
                res.send({ status: 'error', data: 'owner not found' });
              }
            }).catch((e) => {
              res.send({ status: 'error', data: e });
            });
          } catch (error) {
            console.log('Verification failed');
          }
        });


        
app.post("/clientData", async(req,res)=>{
  const {token}=req.body;
try {
  const client =jwt.verify(token,JWT_SECRET,(err,res)=>{
      if(err){return "token expired"}
      return res;
  });
  console.log(client);
  if(client=="token expired"){
      return res.send({ status: 'error', data: "token expired" });

  }
  
  const clientEmail= student.email;
  Clientt.findOne({email:clientEmail}).then(
      (data)=>{
          if (data) {
              res.send({ status: 'ok', data: data });
            } else {
              res.send({ status: 'error', data: 'Student not found' });
            }
          }).catch((e) => {
            res.send({ status: 'error', data: e });
          });
        } catch (error) {
          console.log('Verification failed');
        }
      });


app.listen(5001, () => {
  console.log("server is working");
});
