const RuleFactory = require('rules-config/config');


const ANCFormProgramEncounterDecisions = RuleFactory("3a95e9b0-731a-4714-ae7c-10e1d03cebfe", "decision");

@ANCFormProgramEncounterDecisions("d35e3039-eeb7-4c1b-b02f-88f492163500", "Calcium 1g/Day", {})
class Calcium1gDay {
    static exec(programEncounter, decisions, today) {
        return {"name": "Treatment", "value": "e4ccf02c-9767-4641-ab76-5128e2a1f0d9"};
    }
}

module.exports = {Calcium1gDay};