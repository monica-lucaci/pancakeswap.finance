# PancakeSwap (CLONE)
This project is a clone of PancakeSwap, a decentralized finance (DeFi) platform that allows users to trade cryptocurrencies on the Binance Smart Chain network. Our goal is to create a platform similar to PancakeSwap using only HTML, CSS, and JavaScript.

## Contributors:
- [@desy25](https://github.com/desy25)

- [@EleonoraMelodia](https://github.com/EleonoraMelodia)

- [@HarleyJ22](https://github.com/HarleyJ22)

- [@LuigiRauso](https://github.com/LuigiRauso)

- [@monica-lucaci](https://github.com/monica-lucaci) (Team Leader)

## Tools:
- Visual Studio Code
- Git
- Trello

## Join us on Trello:
Trello is a project management tool that lets you create and manage tasks.

**Join us on Trello:** [PancakeSwap Board](https://trello.com/b/Blf1AyLT/pancakeswap-project)

Once you're on Trello, check the task that has been assigned to you and click "join" to start working on it.

## Best practices:
1. **Working with CSS:**  
* Make use of of ```class``` and ```id``` selectors.
* Adopt "kebab-case" for naming your selectors.  
* Use the colors in the ```root.css``` file, adding new ones only if needed.

2. **Working with JavaScript:**  
* Use camelCase  
* Use specific names for variables based on the context

3. **Working with Git:**  
Follow the git workflow procedure: [guide](https://www.atlassian.com/it/git/tutorials/comparing-workflows/gitflow-workflow)

* **Branch naming**  
Initiating a task involves creating a new ```branch```.  
Keep the name of the branch short and concise, but make sure to include relevant key words.  
Use category words to easily identify the type of the task.  
Keep the same name conventions for the whole project.  
Adopt the kebab-case style when naming a new branch.   
```git checkout development ```   
```git checkout -b feature/button```

 * **Adding new features**  
 Create a new branch starting from the ```development``` branch:  
 ``` git switch development ```  
 ``` git pull origin development ```  
 ``` git switch -c branch name ```

* **Commit messages**  
Make sure to keep your commits small and focused, using clear and concise commit messages:  
``` git commit -m "NAVBAR: add new button" ```

* **Pull request**  
**Creation:** After pushing changes to your branch, create a pull request for team review.  
**Naming:** The title should be concise and descriptive.  
**Description:** Summarize the changes and their necessity.  
**Review:** Team members review and provide feedback. Address any comments before merging.  
**Merging:** Merge your pull request into the ```development``` branch after review. Delete the feature branch afterwards to maintain a clean repository.
