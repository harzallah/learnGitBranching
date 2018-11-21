exports.level = {
  "name": {
    "en_US": "Git-Flow : Summarize",
  },
  "goalTreeString": '{"branches":{"master":{"target":"C8","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C1","C2"],"id":"C3"},"C4":{"parents":["C2"],"id":"C4"},"C5":{"parents":["C2","C4"],"id":"C5"},"C6":{"parents":["C3","C5"],"id":"C6"},"C7":{"parents":["C6"],"id":"C7"},"C8":{"parents":["C6","C7"],"id":"C8"},"C9":{"parents":["C5","C7"],"id":"C9"}},"tags":{"0.1.0":{"target":"C3","id":"0.1.0"},"0.2.0":{"target":"C6","id":"0.2.0"},"0.2.1":{"target":"C8","id":"0.2.1"}},"HEAD":{"target":"develop","id":"HEAD"}}',
  "solutionCommand": "git flow feature start f2; git commit; git flow feature finish f2; git flow release start 0.2.0; git flow release finish 0.2.0; git flow hotfix start 0.2.1; git commit; git flow hotfix finish 0.2.1",
  "startTree": '{"branches":{"master":{"target":"C3","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C2","id":"develop","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C1","C2"],"id":"C3"}},"tags":{"0.1.0":{"target":"C3","id":"0.1.0"}},"HEAD":{"target":"develop","id":"HEAD"}}',
  "hint": {
    "en_US": "Just type in 'git commit' twice to finish!",
  },
  "disabledMap": {
    "git revert": true,
    // "git checkout": true,
    "git branch": true,
    "git merge": true,
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git Flow : Summarize",
              "We want to summarize features, releases and hotfixes. You should : ",
              "",
              "- Create a new release 0.1.0",
              "",
              "- Create a new feature f2, make a commit and finish it",
              "",
              "- Create a new release 0.2.0",
              "",
              "- From the version 0.2.0, create a hotfix 0.2.1, make a commit and finish it"
            ]
          }
        }
      ]
    },
  }
};

var langs = ['zh_CN', 'fr_FR', 'de_DE', 'ja', 'es_AR', 'pt_BR', 'zh_TW', 'ru_RU', 'ko', 'uk'];

langs.map( function(lang){
  exports.level.name[lang] = exports.level.name.en_US;
  exports.level.hint[lang] = exports.level.hint.en_US;
  exports.level.startDialog[lang] = exports.level.startDialog.en_US;
});