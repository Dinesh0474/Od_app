const namelist=[{'id': '1', 'name': 'A. ARVIND KUMAR'}, {'id': '2', 'name': 'ABIRAMI S'}, {'id': '3', 'name': 'ADHITYA.B'}, {'id': '4', 'name': 'AHAMED ISMAIL HISAM M'}, {'id': '5', 'name': 'BHANUPRIYA M'}, {'id': '6', 'name': 'BUDATHA DELLISAI'}, {'id': '7', 'name': 'CHALLAPALLI LAKSHMI VARDHAN REDDY'}, {'id': '15', 'name': 'D.JAWAHAR GANESH'}, {'id': '8', 'name': 'DAVID EBENEZER P'}, {'id': '9', 'name': 'DHANUSH KODI B'}, {'id': '11', 'name': 'DHANUSH RAHUL M'}, {'id': '12', 'name': 'DHARMADURAI.R'}, {'id': '13', 'name': 'DHARSHINI S'}, {'id': '14', 'name': 'DINESH K'}, {'id': '16', 'name': 'E YUVAN SURYA'}, {'id': '17', 'name': 'HARINI A'}, {'id': '19', 'name': 'HARISHA B S (10/01/2004)'}, {'id': '18', 'name': 'HARISHA.B.S (29/7/2003)'}, {'id': '20', 'name': 'HEMAN VIKASH K'}, {'id': '21', 'name': 'JAI AADITHYA.S'}, {'id': '22', 'name': 'JAISE PAUL'}, {'id': '23', 'name': 'JEEVA J V'}, {'id': '24', 'name': 'JEY SHREE MEN G R'}, {'id': '25', 'name': 'KAARUNYA C H'}, {'id': '26', 'name': 'KARAN JOE MATHEW D'}, {'id': '27', 'name': 'KAREENA M N'}, {'id': '28', 'name': 'KONDA MUNI CHARAN'}, {'id': '29', 'name': 'LOHITRAJ.G'}, {'id': '30', 'name': 'LOKESH M'}, {'id': '47', 'name': 'RATHNA PREETHI M.A'}, {'id': '45', 'name': 'RAM KUMAR M'}, {'id': '31', 'name': 'MADHU KESHWAR M.S.'}, {'id': '32', 'name': 'MAGESH KUMAR E'}, {'id': '33', 'name': 'MAHMOODAH HAFSAH S'}, {'id': '34', 'name': 'MATHUKU JAYASIMHA REDDY'}, {'id': '35', 'name': 'MOHANA SUNDARAM B'}, {'id': '38', 'name': 'N. PRIYADHARSHINI'}, {'id': '36', 'name': 'NAVINAA.G'}, {'id': '37', 'name': 'NISHA V'}, {'id': '40', 'name': 'P.ATHULYA KAIRALI'}, {'id': '39', 'name': 'PANKAJ N'}, {'id': '41', 'name': 'POOVIZHI P'}, {'id': '42', 'name': 'PRABHAKARAN R'}, {'id': '43', 'name': 'PRATHAP D'}, {'id': '44', 'name': 'PRIYADARSHAN N S'}, {'id': '46', 'name': 'RANIPETA HARIKA'}, {'id': '48', 'name': 'RAVEEN R V'}, {'id': '49', 'name': 'ROSHINI G'}, {'id': '50', 'name': 'SAI SHARAN R'}, {'id': '51', 'name': 'SAMYUKTHAA B'}, {'id': '52', 'name': 'SANTHOSH K'}, {'id': '53', 'name': 'SHANMUGAVEL A'}, {'id': '54', 'name': 'SHERYL TREFINA.J'}, {'id': '55', 'name': 'SNEHA. R'}, {'id': '56', 'name': 'SRIHARI S'}, {'id': '57', 'name': 'SRIRAM B'}, {'id': '58', 'name': 'SRUTHI S'}, {'id': '59', 'name': 'SWARNA PRABHA D'}, {'id': '60', 'name': 'THUPILI VAMSI'}, {'id': '61', 'name': 'VINOTH S'}, {'id': '62', 'name': 'VISHAL A'}, {'id': '63', 'name': 'VISHWANATH.R'}, {'id': '301', 'name': 'PRAVIN KUMAR'}, {'id': '302', 'name': 'VISHNU'}]

const requesters=require("../model/schema")

const getname = (req, res) => {
    const data = namelist.find(item => item.id === req.body.id);
    const name = data ? data.name : "Not Found";
    res.json({ "name": name });
  }
  
const addrequest = async (req , res)=> {
    try{
    req.body.status = 4;
    req.body.slot=4;
    console.log(req.body)
    const item= await requesters.create(req.body)
    res.status(200).json(item)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}
const getstatus= async (req,res)=>{
    try{
       const data= await requesters.find({sid:req.body.id})
       console.log(data[0].status,req.body.id)
        res.json({"status":data[0].status,"slot":data[0].slot})
    }catch(err){
        res.json(err)
    }
}

module.exports={getname, addrequest,getstatus}