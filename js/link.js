//同窓で開く用
AFRAME.registerComponent('same_window', {
    schema: {
        link: {type: 'asset', default: ''}
    },

    init: function () {
        let data = this.data;
        this.el.addEventListener('click', function () {
        location.href = data.link;
        });
    }
});  

//別窓で開く用  
AFRAME.registerComponent('new_window', {
    schema: {
        link: {type: 'asset', default: ''}
    },

    init: function () {
        let data = this.data;
        this.el.addEventListener('click', function () {
        open(data.link);
        });
    }
});

AFRAME.registerComponent("mylink", {
    schema: {
        url: {default: ''}
    },
    init: function() {
        var data = this.data;
        var el = this.el;
        el.addEventListener('click', function() {
            //window.open(data.url, '_blank');
            window.location.href = url;
        });
    }
});

