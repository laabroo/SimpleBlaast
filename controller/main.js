var _ = require('common/util');

_.extend(exports, {
    ':load' : function() {
        var view = this;
        console.log('View was loaded');

        view.get('textName', 'textEmail', 'textTwitter').on('submit', function() {
            console.log(view.get('textName', 'textEmail', 'textTwitter').value());
            app.msg('post_data', {text : view.get('textName', 'textEmail', 'textTwitter')});

        });

        app.on('message',function(action, data){
           console.log(action);
            if(action === 'post_data'){
                console.log(data.text);
                view.get('labelValueName','labelValueEmail','labelValueTwitter').label(data.text);
            }
        });

    },

    ':resized' : function(width, height) {
        console.log('View was resized to ' + width + 'x' + height);
    },

    ':keydown' : function(key) {
        console.log('Key down: ' + key);
    },

    ':keyup' : function(key) {
        console.log('Key up: ' + key);
    },

    ':keypress' : function(key) {
        console.log('Key press: ' + key);
    },

    ':active' : function() {
        console.log('View is active');
    },

    ':inactive' : function() {
        console.log('View is inactive');
    }
});
