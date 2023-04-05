const core = require('@actions/core')

try {
  let packagesFailed = core.getInput('packages_failed_to_delete', { required: true })
  let packagesNeedsGithubAssistance = core.getInput('packages_needs_github_assistance', { required: true })

  const packagesFailedUrls = []
  const packagesNeedsGithubAssistanceUrls = []

  packagesFailed = packagesFailed.split(',')
  for (let i = 0; i < packagesFailed.length; i++) {
    const packageName = packagesFailed[i].substring(0, packagesFailed[i].indexOf(':'))
    const versionID = packagesFailed[i].substring(packagesFailed[i].indexOf(':') + 1, packagesFailed[i].length)
    const URL = 'https://github.com/orgs/Calance-US/packages/container/' + packageName + '/' + versionID
    packagesFailedUrls.push(URL)
  }
  core.setOutput('packages_failed_urls', packagesFailedUrls)

  packagesNeedsGithubAssistance = packagesNeedsGithubAssistance.split(',')
  for (let i = 0; i < packagesNeedsGithubAssistance.length; i++) {
    const packageName = packagesNeedsGithubAssistance[i].substring(0, packagesNeedsGithubAssistance[i].indexOf(':'))
    const versionID = packagesNeedsGithubAssistance[i].substring(packagesNeedsGithubAssistance[i].indexOf(':') + 1, packagesNeedsGithubAssistance[i].length)
    const URL = 'https://github.com/orgs/Calance-US/packages/container/' + packageName + '/' + versionID
    packagesNeedsGithubAssistanceUrls.push(URL)
  }
  core.setOutput('packages_needs_github_assistance_urls', packagesNeedsGithubAssistanceUrls)
} catch (error) {
  core.setFailed(error.message)
}
