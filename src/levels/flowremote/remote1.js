exports.level = {
  "name": {
    "en_US": "Git-Flow with remotes : publishing",
  },
  "goalTreeString": '{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":"o/master"},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":"o/develop"},"o/master":{"target":"C1","id":"o/master","remoteTrackingBranchID":null},"o/develop":{"target":"C9","id":"o/develop","remoteTrackingBranchID":null},"feat/f1":{"target":"C4","id":"feat/f1","remoteTrackingBranchID":"o/feat/f1"},"feat/f2":{"target":"C6","id":"feat/f2","remoteTrackingBranchID":null},"o/feat/f1":{"target":"C4","id":"o/feat/f1","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C5":{"parents":["C2"],"id":"C5"},"C6":{"parents":["C5"],"id":"C6"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"}},"tags":{},"HEAD":{"target":"feat/f1","id":"HEAD"},"originTree":{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":null},"feat/f1":{"target":"C4","id":"feat/f1","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"}},"tags":{},"HEAD":{"target":"develop","id":"HEAD"}}}',
  "solutionCommand": "git flow feature publish f1",
  "startTree": '{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":"o/master"},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":"o/develop"},"o/master":{"target":"C1","id":"o/master","remoteTrackingBranchID":null},"o/develop":{"target":"C9","id":"o/develop","remoteTrackingBranchID":null},"feat/f1":{"target":"C4","id":"feat/f1","remoteTrackingBranchID":null},"feat/f2":{"target":"C6","id":"feat/f2","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C3":{"parents":["C2"],"id":"C3"},"C4":{"parents":["C3"],"id":"C4"},"C5":{"parents":["C2"],"id":"C5"},"C6":{"parents":["C5"],"id":"C6"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"}},"tags":{},"HEAD":{"target":"develop","id":"HEAD"},"originTree":{"branches":{"master":{"target":"C1","id":"master","remoteTrackingBranchID":null},"develop":{"target":"C9","id":"develop","remoteTrackingBranchID":null}},"commits":{"C0":{"parents":[],"id":"C0","rootCommit":true},"C1":{"parents":["C0"],"id":"C1"},"C2":{"parents":["C0"],"id":"C2"},"C7":{"parents":["C2"],"id":"C7"},"C8":{"parents":["C7"],"id":"C8"},"C9":{"parents":["C8"],"id":"C9"}},"tags":{},"HEAD":{"target":"develop","id":"HEAD"}}}',
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
              "## Git-Flow with remotes : publishing",
              "We are now working with a remote. Your goal is simply to publish the feature f1",
              ""
            ]
          }
        }
      ]
    },
  }
};
