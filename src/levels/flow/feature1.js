exports.level = {
  "name": {
    "en_US": "Introduction to Git-Flow",
  },
  "goalTreeString": '{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C5","id":"develop","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C5":{"parents":["C2","C4"],"id":"C5"}},"tags":{},"HEAD":{"target":"develop","id":"HEAD"}}',
  "solutionCommand": "git flow feature start f1; git commit; git commit; git flow feature finish f1",
  "startTree": '{"branches":{"master":{"target":"C1","id":"master"},"develop":{"target":"C2","id":"develop"}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"}},"HEAD":{"target":"develop","id":"HEAD"}}',
  "hint": {
    "en_US": "Just type in 'git commit' twice to finish!",
  },
  "disabledMap": {
    "git revert": true,
    "git checkout": true,
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
              "## Git Flow : feature",
              "In this example, we want to see how git-flow works. We want to :",
              "",
              "- create a new feature f1",
              "",
              "- make two commits ",
              "",
              "- finish the feature f1"
            ]
          }
        }
      ]
    },
  }
};
