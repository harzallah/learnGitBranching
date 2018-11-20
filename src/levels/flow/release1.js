exports.level = {
  "name": {
    "en_US": "Git-Flow Release",
  },
  "goalTreeString": '{"branches":{"master":{"target":"C8","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C5":{"parents":["C2","C4"],"id":"C5"},"C6":{"parents":["C5"],"id":"C6"},"C7":{"parents":["C6"],"id":"C7"},"C8":{"parents":["C1","C7"],"id":"C8"},"C9":{"parents":["C5","C7"],"id":"C9"}},"tags":{"0.1.0":{"target":"C8","id":"0.1.0"}},"HEAD":{"target":"develop","id":"HEAD"}}',
  "solutionCommand": "git flow release start 0.1.0; git commit; git commit; git flow release finish 0.1.0",
  "startTree": '{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C5","id":"develop","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C5":{"parents":["C2","C4"],"id":"C5"}},"tags":{},"HEAD":{"target":"develop","id":"HEAD"}}',
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
              "## Git Flow : release",
              "Starting from previous repository, we want to make a new release. You should : ",
              "",
              "- Create a new release 0.1.0",
              "",
              "- Make two commits",
              "",
              "- Finish the release"
            ]
          }
        }
      ]
    },
  }
};
