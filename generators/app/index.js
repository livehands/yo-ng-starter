"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the supreme ${chalk.red(
          "generator-lh-ng-starter"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projName",
        message: "What the name of your project (no spaces)?",
        default: "my-ng-proj"
      },
      {
        type: "input",
        name: "title",
        message: "What is the title for the app (spaces allowed)?",
        default: "My Ng Project"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("**"),
      this.destinationPath(this.props.projName),
      {
        title: this.props.title,
        projName: this.props.projName
      }
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
    this.npmInstall(['@angular-devkit/build-angular'], { 'save-dev': true });
  }
};
