
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', name:'Danilo'});
};

exports.koala = function(req,res){
    var name=  req.param('name', 'Mr.Awesome');

    res.render('koala', {name: name});

};