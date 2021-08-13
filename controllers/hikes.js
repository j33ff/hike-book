const Hike = require('../models/hike');


function newHike(req, res){
    res.render('hikes/new', {user: req.user});
}

async function create(req, res){
    try {
        const hike = new Hike(req.body);
        await hike.save();
        res.redirect('/hikes');
    }
    catch (err) {
        res.send(err.message);
    }
}

async function index(req, res){
    try {
        let hikes = await Hike.find({});
        res.render('hikes/index', {
            hikes,
            user: req.user
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

async function deleteHike(req,res){

    try {
        await Hike.findByIdAndRemove(req.params.id, req.body);
        res.redirect("/hikes");
    }  catch (err){
    console.log(err.message);
}

}

async function showEdit(req, res){
    let hike = await Hike.findById(req.params.id);
    res.render("hikes/edit", {
        hike,
        user: req.user 
    });
}

async function show(req, res){
    let hike = await Hike.findById(req.params.id);
    await res.render("hikes/show", {
        hike,
        user:req.user
    });
}

module.exports = {
    new: newHike,
    index,
    create,
    edit,
    showEdit,
    show,
    delete: deleteHike
}