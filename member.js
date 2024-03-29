function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 26,
        skills: ['JS', 'CSS', 'HTML'],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
    member.showSkills();
}