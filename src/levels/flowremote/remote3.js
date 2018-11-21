exports.level = {
  "name": {
    "en_US": "Git-Flow with remotes 2",
  },
  "goalTreeString": '{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":"o/master"},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":"o/develop"},"o/master":{"target":"C1","id":"o/master","remoteTrackingBranchID":null},"o/develop":{"target":"C9","id":"o/develop","remoteTrackingBranchID":null},"feat/f1":{"target":"C5","id":"feat/f1","remoteTrackingBranchID":"o/feat/f1"},"o/feat/f1":{"target":"C5","id":"o/feat/f1","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"},"C10":{"parents":["C4"],"id":"C10"},"C5":{"parents":["C10"],"id":"C5"}},"tags":{},"HEAD":{"target":"feat/f1","id":"HEAD"},"originTree":{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":null},"feat/f1":{"target":"C5","id":"feat/f1","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C10":{"parents":["C4"],"id":"C10"},"C5":{"parents":["C10"],"id":"C5"}},"tags":{},"HEAD":{"target":"develop","id":"HEAD"}}}',
  "solutionCommand": "git pull; git commit; git flow feature publish f1",
  "startTree": '{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":"o/master"},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":"o/develop"},"o/master":{"target":"C1","id":"o/master","remoteTrackingBranchID":null},"o/develop":{"target":"C9","id":"o/develop","remoteTrackingBranchID":null},"feat/f1":{"target":"C4","id":"feat/f1","remoteTrackingBranchID":"o/feat/f1"},"o/feat/f1":{"target":"C4","id":"o/feat/f1","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"}},"tags":{},"HEAD":{"target":"feat/f1","id":"HEAD"},"originTree":{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":null},"feat/f1":{"target":"C10","id":"feat/f1","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C10":{"parents":["C4"],"id":"C10"}},"tags":{},"HEAD":{"target":"develop","id":"HEAD"}}}',
  "hint": {
    "en_US": "Just type in 'git commit' twice to finish!",
  },
  "disabledMap": {
    "git revert": true,
    // "git checkout": true,
    // "git branch": true,
    // "git merge": true,
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git-Flow with remotes",
              "In this example, you should :",
              "",
              "- Synchronize your f1 feature with remote",
              "",
              "- make a new commit on the feature f1",
              "",
              "- publish the modification"
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