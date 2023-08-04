function skillsMember(){
    return {
     restrict: 'E',
     templateUri: 'modules/skills/views/members.html',
     controller: 'SkillsMemberControler',
     controllerAs: 'vm',
     bindToController: true,
     scope: {
       member: 'm'
     }
    };
}