const Hike = require('../models/hike');


function newHike(req, res){
    res.render('hikes/new');
}

function create(req, res){

    const hike = new Hike(req.body);
    hike.save(function(err) {
    if (err) return res.render('hikes/new');
    console.log(hike);
    res.redirect('/hikes');
  });
}

async function index(req, res){
    try {
        let hikes = await Hike.find({});
        res.render('hikes/index', {
            hikes
        });
    } catch (err){
        console.log(err.message);
    }
}

async function edit(req,res){

    try {
        await Hike.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/hikes");
    }  catch (err){
    console.log(err.message);
}

}

async function showEdit(req, res){
    let hike = await Hike.findById(req.params.id);
    res.render("hikes/edit", {
        hike 
    });
}

async function show(req, res){
    let hike = await Hike.findById(req.params.id);
    await res.render("hikes/show", {
        hike
    });
}

module.exports = {
    new: newHike,
    index,
    create,
    edit,
    showEdit,
    show
}