
async function fetchProfileData() {
    const url = 'https://joaoex15.github.io/js-developer-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
