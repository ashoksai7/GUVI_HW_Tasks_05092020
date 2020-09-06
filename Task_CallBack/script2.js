let timerAndDisp = function(count,cb){
    cb(count);

}

var cont = document.createElement('div');
cont.setAttribute('class','container-fluid');
cont.style.paddingTop = '30px';

var maindiv = document.createElement('div');
maindiv.setAttribute('class','text-center')
maindiv.setAttribute('id','maindiv')

var lowerdiv = document.createElement('div');
lowerdiv.setAttribute('class','text-center')
lowerdiv.setAttribute('id','lowdiv')

cont.append(maindiv);
document.body.append(cont);
timerAndDisp(10,function(val){
    var divmain = document.getElementById('maindiv');
    setTimeout(function(){
        //console.log(val);
        divmain.innerHTML = '<h1>' + val +'<h1>'
        let k9 = function(count,cb){
            cb(count);
        }
        k9(9,function(val){
            setTimeout(function(){
                divmain.innerHTML = '<h1>' + val +'<h1>'
                let k8 = function(count,cb){
                    cb(count);
                }
                k8(8, function(val){
                    setTimeout(function(){
                        divmain.innerHTML = '<h1>' + val +'<h1>'
                        let k7 = function(count,cb){
                            cb(count);
                        }
                        k7(7, function(val){
                            setTimeout(function(){
                                divmain.innerHTML = '<h1>' + val +'<h1>'
                                let k6 = function(count,cb){
                                    cb(count);
                                }
                                k6(6, function(val){
                                    setTimeout(function(){
                                        divmain.innerHTML = '<h1>' + val +'<h1>'
                                        let k5 = function(count, cb){
                                            cb(count);
                                        }
                                        k5(5, function(val){
                                            setTimeout(function(){
                                                divmain.innerHTML = '<h1>' + val +'<h1>'
                                                let k4 = function(count, cb){
                                                    cb(count);
                                                }
                                                k4(4, function(val){
                                                    setTimeout(function(){
                                                        divmain.innerHTML = '<h1>' + val +'<h1>'
                                                        let k3 = function(count, cb){
                                                            cb(count);
                                                        }
                                                        k3(3, function(val){
                                                            setTimeout(function(){
                                                                divmain.innerHTML = '<h1>' + val +'<h1>'
                                                                let k2 = function(count,cb){
                                                                    cb(count);
                                                                }
                                                                k2(2, function(val){
                                                                    setTimeout(function(){
                                                                        divmain.innerHTML = '<h1>' + val +'<h1>'
                                                                        let k1 = function(count,cb){
                                                                            cb(count);
                                                                        }
                                                                        k1(1, function(val){
                                                                            setTimeout(function(){
                                                                                divmain.innerHTML = '<h1>' + val +'<h1>'
                                                                                let k0 = function(cb){
                                                                                    cb();
                                                                                }
                                                                                k0(function(){
                                                                                    setTimeout(function(){
                                                                                        divmain.innerHTML = '<h1>Happy Independance Day<h1>'
                                                                                    },1000)
                                                                                })
                                                                            },1000)
                                                                        })
                                                                    },1000)
                                                                })
                                                            },1000)
                                                        })
                                                    },1000)
                                                })
                                            },1000)
                                        })
                                    },1000)
                                })
                            },1000)
                        })
                    },1000)
                })
            },1000)
        })
    }, 1000);
})