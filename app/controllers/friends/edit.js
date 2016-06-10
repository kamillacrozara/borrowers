import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save(model) {
            console.log('+--- save action called in friends edit controller');
            this.transitionToRoute('friends.show', model);
        },
        cancel(model) {
            console.log('+--- cancel action called in friends edit controller');
            this.transitionToRoute('friends.show', model);
        }
    }
});
