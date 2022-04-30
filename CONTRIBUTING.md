# Contributing to React-Scrollbar-Size

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the open source community. Here are a few guidelines that will help you along the way.

## Code of Conduct

React-Scrollbar-Size has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/shawnmcknight/react-scrollbar-size/issues?q=is:open+is:issue+label:"good+first+issue") that contain changes that have a relatively limited scope. This label means that there is already a working solution to the issue in the discussion section. Therefore, it is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you have started to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than a week, it’s fine to take it over but you should still leave a comment.
If there has been no activity on the issue for 7 to 14 days, it is safe to assume that nobody is working on it.

## Sending a Pull Request

React-Scrollbar-Size is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/react-scrollbar-size.git
cd react-scrollbar-size
git remote add upstream https://github.com/shawnmcknight/react-scrollbar-size.git
```

3. Install the dependencies:

```sh
npm install
```

4. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

5. Make changes, commit and push to your fork:

```sh
git push -u origin HEAD
```

6. Go to [the repository](https://github.com/shawnmcknight/react-scrollbar-size) and make a Pull Request.

The maintainers are monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

#### Checks and how to fix them

If any of the checks fails click on the _Details_
link and review the logs of the build to find out why it failed. The following
section gives an overview of what each check is responsible for.

##### test:unit

Ensures that code performs as expected under test scenarios.

##### test:coverage

Monitors coverage of the tests. There is a strict policy of enforcing 100% code coverage. If something is not readily testable, the specific area can be ignored with an `istanbul ignore` comment, but an explanation of the rationale for ignoring should be included in the comment.

##### typecheck

Ensures that all TypeScript typings are valid and the TypeScript compiler does not encounter any errors.

##### lint

Ensures that code is styled according to the standards of the repository.

###### prettier

Ensures that code is formatted according to the standards of the repository.

### Coding style

Please follow the coding style of the project. React-Scrollbar-Size uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `npm run lint` runs manually the rules for eslint.
- `npm run prettier` runs manually the rules for prettier.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## License

By contributing your code to the shawnmcknight/react-scrollbar-size GitHub repository, you agree to license your contribution under the MIT license.
