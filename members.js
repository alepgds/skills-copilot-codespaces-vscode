function skillsMember(){
    return {
     restrict: 'E',
     templateUri: 'modules/skills/views/members.html',
     controller: 'SkillMemberControler',
     controllerAs: 'vm',
     bindToController: true,
     scope: {
       member: 'm'
     }
    };
}