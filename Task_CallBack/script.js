let timerAndDisp1 = function(count,cb){
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

var link = document.createElement('a')
link.setAttribute('class','text-center')
link.setAttribute('href','./index2.html')
link.innerText = 'Different implementation of same callback'

cont.append(maindiv,link);
document.body.append(cont);

timerAndDisp1(10,function(val){
    var divmain = document.getElementById('maindiv');
    setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 0);
    let k9 = function(count,cb){
        cb(count);
    }
    k9(9,function(val) {
        setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 1000);
        let k8 = function(count,cb){
            cb(count);
        }
        k8(8,function(val) {
            setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 2000);
            let k7 = function(count,cb) {
                cb(count);
            }
            k7(7,function(val) {
                setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 3000);
                let k6 =function(count,cb){
                    cb(count);
                }
                k6(6,function(val){
                    setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 4000);
                    let k5 = function(count,cb){
                        cb(count);
                    }
                    k5(5, function(val){
                        setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 5000);
                        let k4 = function(count,cb){
                            cb(count);
                        }
                        k4(4,function(val){
                            setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 6000);
                            let k3 = function(count, cb){
                                cb(count);
                            }
                            k3(3, function(val){
                                setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 7000);
                                let k2 = function(count, cb){
                                    cb(count);
                                }
                                k2(2, function(val){
                                    setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 8000);
                                    let k1 = function(count, cb){
                                        cb(count);
                                    }
                                    k1(1, function(val){
                                        setTimeout(function(){divmain.innerHTML = '<h1>' + val +'<h1>'}, 9000);
                                        let k0 = function(cb){
                                            cb();
                                        }
                                        k0(function(){
                                            setTimeout(function(){divmain.innerHTML = '<h1>Happy Independance Day<h1>'}, 10000);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})