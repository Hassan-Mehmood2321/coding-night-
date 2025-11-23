// VisualBook - Complete Single Page Application

// ==================== LOCAL STORAGE MANAGEMENT ====================
const randomProfilePics = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
];

const randomPostImages = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&h=500&fit=crop'
];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function initializeStorage() {
    if (!localStorage.getItem('visualbook_users')) {
        const sampleUsers = [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                bio: 'Software developer and photography enthusiast',
                location: 'New York, USA',
                profilePicture: getRandomItem(randomProfilePics),
                friends: [2, 3],
                friendRequests: [],
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'jane@example.com',
                password: 'password123',
                bio: 'Digital marketer and travel blogger',
                location: 'Los Angeles, USA',
                profilePicture: getRandomItem(randomProfilePics),
                friends: [1],
                friendRequests: [],
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                name: 'Mike Johnson',
                email: 'mike@example.com',
                password: 'password123',
                bio: 'Fitness coach and nutrition expert',
                location: 'Chicago, USA',
                profilePicture: getRandomItem(randomProfilePics),
                friends: [1],
                friendRequests: [],
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('visualbook_users', JSON.stringify(sampleUsers));
    }

    if (!localStorage.getItem('visualbook_posts')) {
        const samplePosts = [
            {
                id: 1,
                userId: 1,
                content: 'Just finished my morning run! Feeling energized and ready for the day. 🏃‍♂️',
                feeling: 'energized',
                location: 'Central Park, NYC',
                image: getRandomItem(randomPostImages),
                likes: [2, 3],
                comments: [
                    { userId: 2, content: 'Great job! Keep it up!', timestamp: new Date().toISOString() }
                ],
                shares: 0,
                timestamp: new Date().toISOString()
            },
            {
                id: 2,
                userId: 2,
                content: 'Beautiful sunset at the beach today. Nature is amazing! 🌅',
                feeling: 'amazed',
                location: 'Santa Monica Beach',
                image: getRandomItem(randomPostImages),
                likes: [1],
                comments: [],
                shares: 1,
                timestamp: new Date().toISOString()
            },
            {
                id: 3,
                userId: 3,
                content: 'New personal record at the gym today! Hard work pays off. 💪',
                feeling: 'proud',
                location: 'Downtown Fitness',
                image: getRandomItem(randomPostImages),
                likes: [1, 2],
                comments: [
                    { userId: 1, content: 'Awesome! What was your routine?', timestamp: new Date().toISOString() }
                ],
                shares: 0,
                timestamp: new Date().toISOString()
            }
        ];
        localStorage.setItem('visualbook_posts', JSON.stringify(samplePosts));
    }

    if (!localStorage.getItem('visualbook_groups')) {
        const sampleGroups = [
            {
                id: 1,
                name: 'Photography Enthusiasts',
                description: 'A community for photography lovers to share tips and photos',
                privacy: 'public',
                members: [1, 2],
                createdBy: 1,
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Fitness & Wellness',
                description: 'Share your fitness journey and wellness tips',
                privacy: 'public',
                members: [1, 3],
                createdBy: 3,
                createdAt: new Date().toISOString()
            }
        ];
        localStorage.setItem('visualbook_groups', JSON.stringify(sampleGroups));
    }

    if (!localStorage.getItem('visualbook_stories')) {
        const sampleStories = [
            {
                id: 1,
                userId: 1,
                image: getRandomItem(randomPostImages),
                timestamp: new Date().toISOString(),
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 2,
                userId: 2,
                image: getRandomItem(randomPostImages),
                timestamp: new Date().toISOString(),
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            }
        ];
        localStorage.setItem('visualbook_stories', JSON.stringify(sampleStories));
    }

    if (!localStorage.getItem('visualbook_current_user')) {
        localStorage.setItem('visualbook_current_user', JSON.stringify(null));
    }
}

function getStorageData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function saveStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('visualbook_current_user'));
}

function setCurrentUser(user) {
    localStorage.setItem('visualbook_current_user', JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.setItem('visualbook_current_user', JSON.stringify(null));
}

function generateId() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

function getUserById(userId) {
    const users = getStorageData('visualbook_users');
    return users.find(user => user.id === parseInt(userId));
}

function getPostsByUserId(userId) {
    const posts = getStorageData('visualbook_posts');
    return posts.filter(post => post.userId === parseInt(userId));
}

function getGroupsByUserId(userId) {
    const groups = getStorageData('visualbook_groups');
    return groups.filter(group => group.members.includes(parseInt(userId)));
}

function getStoriesByUserId(userId) {
    const stories = getStorageData('visualbook_stories');
    const now = new Date();
    return stories.filter(story =>
        story.userId === parseInt(userId) && new Date(story.expiresAt) > now
    );
}

function getActiveStories() {
    const stories = getStorageData('visualbook_stories');
    const now = new Date();
    return stories.filter(story => new Date(story.expiresAt) > now);
}

// ==================== AUTHENTICATION ====================
function checkAuthStatus() {
    const currentUser = getCurrentUser();

    if (currentUser) {
        showPage('home');
        updateUIWithUserInfo(currentUser);
    } else {
        showPage('login');
    }
}

function updateUIWithUserInfo(user) {
    // Update all avatars
    document.querySelectorAll('#navAvatar, #userAvatar, #postUserAvatar, #postsPageUserAvatar, #profileAvatar').forEach(el => {
        el.src = user.profilePicture || randomProfilePics[0];
    });

    // Update user info
    const userName = document.getElementById('userName');
    const userBio = document.getElementById('userBio');
    const profileName = document.getElementById('profileName');
    const profileBio = document.getElementById('profileBio');
    const profileLocation = document.getElementById('profileLocation');

    if (userName) userName.textContent = user.name;
    if (userBio) userBio.textContent = user.bio || 'No bio yet';
    if (profileName) profileName.textContent = user.name;
    if (profileBio) profileBio.textContent = user.bio || 'No bio yet';
    if (profileLocation) profileLocation.textContent = user.location || 'No location set';
}

function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;
    const profilePictureInput = document.getElementById('profilePicture');

    const users = getStorageData('visualbook_users');
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert('User with this email already exists. Please log in.');
        return;
    }

    const newUser = {
        id: generateId(),
        name,
        email,
        password,
        bio,
        location,
        profilePicture: getRandomItem(randomProfilePics),
        friends: [],
        friendRequests: [],
        createdAt: new Date().toISOString()
    };

    if (profilePictureInput.files.length > 0) {
        const file = profilePictureInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            newUser.profilePicture = e.target.result;
            completeSignup(newUser);
        };

        reader.readAsDataURL(file);
    } else {
        completeSignup(newUser);
    }
}

function completeSignup(user) {
    const users = getStorageData('visualbook_users');
    users.push(user);
    saveStorageData('visualbook_users', users);

    setCurrentUser(user);
    showPage('home');
    updateUIWithUserInfo(user);
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = getStorageData('visualbook_users');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        setCurrentUser(user);
        showPage('home');
        updateUIWithUserInfo(user);
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
        clearCurrentUser();
        showPage('login');
    }
}

// ==================== PAGE NAVIGATION ====================
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageName + 'Page').classList.add('active');

    // Show/hide navigation based on auth
    const mainNav = document.getElementById('mainNav');
    if (pageName === 'login' || pageName === 'signup') {
        mainNav.style.display = 'none';
    } else {
        mainNav.style.display = 'flex';
        // Load page-specific content
        if (pageName === 'home') initHome();
        if (pageName === 'profile') initProfile();
        if (pageName === 'groups') initGroups();
        if (pageName === 'posts') initPosts();
    }
}

function showProfileTab(tabName) {
    // Update tab links
    document.querySelectorAll('#profileTabs .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Show selected tab content
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById('profile' + tabName.charAt(0).toUpperCase() + tabName.slice(1) + 'Tab').classList.add('active');

    // Load tab content
    if (tabName === 'posts') loadProfilePosts();
    if (tabName === 'friends') loadProfileFriends();
    if (tabName === 'groups') loadProfileGroups();
}

// ==================== HOME PAGE ====================
function initHome() {
    loadPosts();
    loadStories();
    loadFriends();
    loadFriendRequests();
    loadGroups();
}

function loadPosts() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const posts = getStorageData('visualbook_posts');
    const users = getStorageData('visualbook_users');

    posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    const postsFeed = document.getElementById('postsFeed');
    if (postsFeed) {
        postsFeed.innerHTML = '';

        posts.forEach(post => {
            const user = users.find(u => u.id === post.userId);
            if (!user) return;

            const postElement = createPostElement(post, user, currentUser);
            postsFeed.appendChild(postElement);
        });
    }
}

function createPostElement(post, user, currentUser) {
    const postDiv = document.createElement('div');
    postDiv.className = 'card mb-4 post';
    postDiv.id = `post-${post.id}`;

    const isLiked = post.likes.includes(currentUser.id);
    const likeIcon = isLiked ? 'fas fa-heart text-danger' : 'far fa-heart';

    postDiv.innerHTML = `
                <div class="post-header">
                    <img src="${user.profilePicture || randomProfilePics[0]}" class="post-avatar" alt="${user.name}">
                    <div class="post-user-info">
                        <h6 class="mb-0">${user.name}</h6>
                        <div class="post-meta">
                            ${post.feeling ? `<span><i class="fas fa-smile"></i> Feeling ${post.feeling}</span> • ` : ''}
                            ${post.location ? `<span><i class="fas fa-map-marker-alt"></i> ${post.location}</span> • ` : ''}
                            <span>${formatDate(post.timestamp)}</span>
                        </div>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.image ? `<img src="${post.image}" class="post-image" alt="Post image">` : ''}
                </div>
                <div class="post-actions">
                    <div class="post-action like-btn" data-post-id="${post.id}">
                        <i class="${likeIcon}"></i>
                        <span>Like</span>
                        ${post.likes.length > 0 ? `<span class="ms-1">(${post.likes.length})</span>` : ''}
                    </div>
                    <div class="post-action comment-btn" data-post-id="${post.id}">
                        <i class="far fa-comment"></i>
                        <span>Comment</span>
                        ${post.comments.length > 0 ? `<span class="ms-1">(${post.comments.length})</span>` : ''}
                    </div>
                    <div class="post-action share-btn" data-post-id="${post.id}">
                        <i class="far fa-share-square"></i>
                        <span>Share</span>
                        ${post.shares > 0 ? `<span class="ms-1">(${post.shares})</span>` : ''}
                    </div>
                    ${post.userId === currentUser.id ? `
                        <div class="post-action delete-btn" data-post-id="${post.id}">
                            <i class="fas fa-trash"></i>
                            <span>Delete</span>
                        </div>
                    ` : ''}
                </div>
                ${post.comments.length > 0 ? `
                    <div class="post-comments p-3 border-top">
                        ${post.comments.map(comment => {
        const commentUser = getUserById(comment.userId);
        return `
                                <div class="comment mb-2">
                                    <strong>${commentUser.name}</strong>
                                    <span class="ms-2">${comment.content}</span>
                                    <div class="text-muted small">${formatDate(comment.timestamp)}</div>
                                </div>
                            `;
    }).join('')}
                    </div>
                ` : ''}
            `;

    return postDiv;
}

function loadStories() {
    const stories = getActiveStories();
    const users = getStorageData('visualbook_users');

    const storiesContainer = document.getElementById('storiesContainer');
    if (storiesContainer) {
        storiesContainer.innerHTML = '';

        stories.forEach(story => {
            const user = users.find(u => u.id === story.userId);
            if (!user) return;

            const storyElement = document.createElement('div');
            storyElement.className = 'story';
            storyElement.innerHTML = `
                        <div class="story-avatar" style="background-image: url('${story.image}')">
                            <img src="${user.profilePicture || randomProfilePics[0]}" class="rounded-circle w-100 h-100" alt="${user.name}">
                        </div>
                        <div class="story-username">${user.name}</div>
                    `;

            storiesContainer.appendChild(storyElement);
        });
    }
}

function loadFriends() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const users = getStorageData('visualbook_users');
    const friendsList = document.getElementById('friendsList');

    if (friendsList) {
        friendsList.innerHTML = '';

        currentUser.friends.forEach(friendId => {
            const friend = users.find(u => u.id === friendId);
            if (!friend) return;

            const friendElement = document.createElement('div');
            friendElement.className = 'friend-card';
            friendElement.innerHTML = `
                        <img src="${friend.profilePicture || randomProfilePics[0]}" class="friend-avatar" alt="${friend.name}">
                        <div class="friend-info">
                            <h6 class="mb-0">${friend.name}</h6>
                            <p>${friend.bio || 'No bio yet'}</p>
                        </div>
                    `;

            friendsList.appendChild(friendElement);
        });
    }
}

function loadFriendRequests() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const users = getStorageData('visualbook_users');
    const friendRequests = document.getElementById('friendRequests');

    if (friendRequests) {
        friendRequests.innerHTML = '';

        currentUser.friendRequests.forEach(requestId => {
            const requester = users.find(u => u.id === requestId);
            if (!requester) return;

            const requestElement = document.createElement('div');
            requestElement.className = 'notification';
            requestElement.innerHTML = `
                        <img src="${requester.profilePicture || randomProfilePics[0]}" class="notification-avatar" alt="${requester.name}">
                        <div class="notification-content">
                            <strong>${requester.name}</strong> sent you a friend request
                        </div>
                        <div class="notification-actions">
                            <button class="btn btn-success btn-sm accept-request" data-user-id="${requester.id}">Accept</button>
                            <button class="btn btn-danger btn-sm reject-request" data-user-id="${requester.id}">Reject</button>
                        </div>
                    `;

            friendRequests.appendChild(requestElement);
        });
    }
}

function loadGroups() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const groups = getGroupsByUserId(currentUser.id);
    const groupsList = document.getElementById('groupsList');

    if (groupsList) {
        groupsList.innerHTML = '';

        groups.forEach(group => {
            const groupElement = document.createElement('div');
            groupElement.className = 'group-card';
            groupElement.innerHTML = `
                        <div class="group-image">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="group-info">
                            <h5>${group.name}</h5>
                            <p class="text-muted">${group.description}</p>
                            <div class="group-members">
                                ${group.members.slice(0, 3).map(memberId => {
                const member = getUserById(memberId);
                return member ? `<img src="${member.profilePicture || randomProfilePics[0]}" class="member-avatar" alt="${member.name}">` : '';
            }).join('')}
                                ${group.members.length > 3 ? `<span class="member-count">+${group.members.length - 3} more</span>` : ''}
                            </div>
                        </div>
                    `;

            groupsList.appendChild(groupElement);
        });
    }
}

// ==================== PROFILE PAGE ====================
function initProfile() {
    loadProfileData();
    loadProfileGroups();
}

function loadProfileData() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const postsCount = document.getElementById('postsCount');
    const friendsCount = document.getElementById('friendsCount');
    const groupsCount = document.getElementById('groupsCount');

    if (postsCount) postsCount.textContent = getPostsByUserId(currentUser.id).length;
    if (friendsCount) friendsCount.textContent = currentUser.friends.length;
    if (groupsCount) groupsCount.textContent = getGroupsByUserId(currentUser.id).length;
}

function loadProfilePosts() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const posts = getPostsByUserId(currentUser.id);
    const users = getStorageData('visualbook_users');

    posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    const profilePosts = document.getElementById('profilePosts');
    if (profilePosts) {
        profilePosts.innerHTML = '';

        if (posts.length === 0) {
            profilePosts.innerHTML = `
                        <div class="text-center py-5">
                            <i class="fas fa-newspaper fa-3x text-muted mb-3"></i>
                            <h5>No posts yet</h5>
                            <p class="text-muted">Share your thoughts with the world!</p>
                        </div>
                    `;
            return;
        }

        posts.forEach(post => {
            const user = users.find(u => u.id === post.userId);
            if (!user) return;

            const postElement = createPostElement(post, user, currentUser);
            profilePosts.appendChild(postElement);
        });
    }
}

function loadProfileFriends() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const users = getStorageData('visualbook_users');
    const profileFriends = document.getElementById('profileFriends');

    if (profileFriends) {
        profileFriends.innerHTML = '';

        if (currentUser.friends.length === 0) {
            profileFriends.innerHTML = `
                        <div class="col-12 text-center py-5">
                            <i class="fas fa-users fa-3x text-muted mb-3"></i>
                            <h5>No friends yet</h5>
                            <p class="text-muted">Connect with people to see them here!</p>
                        </div>
                    `;
            return;
        }

        currentUser.friends.forEach(friendId => {
            const friend = users.find(u => u.id === friendId);
            if (!friend) return;

            const friendElement = document.createElement('div');
            friendElement.className = 'col-md-6 col-lg-4 mb-4';
            friendElement.innerHTML = `
                        <div class="friend-card">
                            <img src="${friend.profilePicture || randomProfilePics[0]}" class="friend-avatar" alt="${friend.name}">
                            <div class="friend-info">
                                <h6 class="mb-0">${friend.name}</h6>
                                <p>${friend.bio || 'No bio yet'}</p>
                                <button class="btn btn-outline-primary btn-sm view-profile-btn" data-user-id="${friend.id}">View Profile</button>
                            </div>
                        </div>
                    `;

            profileFriends.appendChild(friendElement);
        });
    }
}

function loadProfileGroups() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const groups = getGroupsByUserId(currentUser.id);
    const profileGroups = document.getElementById('profileGroups');

    if (profileGroups) {
        profileGroups.innerHTML = '';

        if (groups.length === 0) {
            profileGroups.innerHTML = `
                        <div class="col-12 text-center py-5">
                            <i class="fas fa-users fa-3x text-muted mb-3"></i>
                            <h5>No groups yet</h5>
                            <p class="text-muted">Join or create groups to see them here!</p>
                        </div>
                    `;
            return;
        }

        groups.forEach(group => {
            const groupElement = document.createElement('div');
            groupElement.className = 'col-md-6 col-lg-4 mb-4';
            groupElement.innerHTML = `
                        <div class="group-card">
                            <div class="group-image">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="group-info">
                                <h5>${group.name}</h5>
                                <p class="text-muted">${group.description}</p>
                                <div class="group-members">
                                    ${group.members.slice(0, 3).map(memberId => {
                const member = getUserById(memberId);
                return member ? `<img src="${member.profilePicture || randomProfilePics[0]}" class="member-avatar" alt="${member.name}">` : '';
            }).join('')}
                                    ${group.members.length > 3 ? `<span class="member-count">+${group.members.length - 3} more</span>` : ''}
                                </div>
                                <div class="mt-3">
                                    <button class="btn btn-outline-danger btn-sm leave-group-btn" data-group-id="${group.id}">Leave Group</button>
                                </div>
                            </div>
                        </div>
                    `;

            profileGroups.appendChild(groupElement);
        });
    }
}

function editProfile() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const editName = document.getElementById('editName');
    const editBio = document.getElementById('editBio');
    const editLocation = document.getElementById('editLocation');
    const editProfileAvatar = document.getElementById('editProfileAvatar');

    if (editName) editName.value = currentUser.name;
    if (editBio) editBio.value = currentUser.bio || '';
    if (editLocation) editLocation.value = currentUser.location || '';
    if (editProfileAvatar) editProfileAvatar.src = currentUser.profilePicture || randomProfilePics[0];

    const modal = new bootstrap.Modal(document.getElementById('editProfileModal'));
    modal.show();
}

function saveProfile() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const editName = document.getElementById('editName');
    const editBio = document.getElementById('editBio');
    const editLocation = document.getElementById('editLocation');
    const profilePictureInput = document.getElementById('profilePictureInput');

    const updatedUser = {
        ...currentUser,
        name: editName.value,
        bio: editBio.value,
        location: editLocation.value
    };

    if (profilePictureInput && profilePictureInput.files.length > 0) {
        const file = profilePictureInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            updatedUser.profilePicture = e.target.result;
            completeProfileUpdate(updatedUser);
        };

        reader.readAsDataURL(file);
    } else {
        completeProfileUpdate(updatedUser);
    }
}

function completeProfileUpdate(updatedUser) {
    const users = getStorageData('visualbook_users');
    const userIndex = users.findIndex(u => u.id === updatedUser.id);

    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        saveStorageData('visualbook_users', users);
        setCurrentUser(updatedUser);

        loadProfileData();
        updateUIWithUserInfo(updatedUser);

        const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal'));
        modal.hide();

        alert('Profile updated successfully!');
    }
}

// ==================== GROUPS PAGE ====================
function initGroups() {
    loadMyGroups();
    loadDiscoverGroups();
    loadGroupSuggestions();
}

function loadMyGroups() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const groups = getGroupsByUserId(currentUser.id);
    const myGroups = document.getElementById('myGroups');

    if (myGroups) {
        myGroups.innerHTML = '';

        if (groups.length === 0) {
            myGroups.innerHTML = `
                        <div class="col-12 text-center py-5">
                            <i class="fas fa-users fa-3x text-muted mb-3"></i>
                            <h5>No groups yet</h5>
                            <p class="text-muted">Join or create groups to see them here!</p>
                        </div>
                    `;
            return;
        }

        groups.forEach(group => {
            const groupElement = createGroupElement(group, true);
            myGroups.appendChild(groupElement);
        });
    }
}

function loadDiscoverGroups() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const allGroups = getStorageData('visualbook_groups');
    const userGroups = getGroupsByUserId(currentUser.id);
    const userGroupIds = userGroups.map(g => g.id);

    const discoverGroupsList = allGroups.filter(group =>
        !userGroupIds.includes(group.id) && group.privacy === 'public'
    );

    const discoverGroups = document.getElementById('discoverGroups');
    if (discoverGroups) {
        discoverGroups.innerHTML = '';

        if (discoverGroupsList.length === 0) {
            discoverGroups.innerHTML = `
                        <div class="col-12 text-center py-5">
                            <i class="fas fa-search fa-3x text-muted mb-3"></i>
                            <h5>No groups to discover</h5>
                            <p class="text-muted">Check back later for new groups!</p>
                        </div>
                    `;
            return;
        }

        discoverGroupsList.forEach(group => {
            const groupElement = createGroupElement(group, false);
            discoverGroups.appendChild(groupElement);
        });
    }
}

function loadGroupSuggestions() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const allGroups = getStorageData('visualbook_groups');
    const userGroups = getGroupsByUserId(currentUser.id);
    const userGroupIds = userGroups.map(g => g.id);

    const friendGroupIds = new Set();
    currentUser.friends.forEach(friendId => {
        const friendGroups = getGroupsByUserId(friendId);
        friendGroups.forEach(group => {
            if (!userGroupIds.includes(group.id)) {
                friendGroupIds.add(group.id);
            }
        });
    });

    const suggestedGroups = Array.from(friendGroupIds).map(groupId =>
        allGroups.find(g => g.id === groupId)
    ).filter(Boolean).slice(0, 5);

    const groupSuggestions = document.getElementById('groupSuggestions');
    if (groupSuggestions) {
        groupSuggestions.innerHTML = '';

        if (suggestedGroups.length === 0) {
            groupSuggestions.innerHTML = `
                        <div class="text-center py-3">
                            <p class="text-muted">No group suggestions at the moment.</p>
                        </div>
                    `;
            return;
        }

        suggestedGroups.forEach(group => {
            const groupElement = document.createElement('div');
            groupElement.className = 'mb-3';
            groupElement.innerHTML = `
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                                    <i class="fas fa-users text-white"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-0">${group.name}</h6>
                                <small class="text-muted">${group.members.length} members</small>
                            </div>
                            <button class="btn btn-primary btn-sm join-group-btn" data-group-id="${group.id}">Join</button>
                        </div>
                    `;

            groupSuggestions.appendChild(groupElement);
        });
    }
}

function createGroupElement(group, isMember) {
    const groupElement = document.createElement('div');
    groupElement.className = 'col-md-6 col-lg-4 mb-4';

    const createdByUser = getUserById(group.createdBy);
    const creatorName = createdByUser ? createdByUser.name : 'Unknown';

    groupElement.innerHTML = `
                <div class="group-card">
                    <div class="group-image">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="group-info">
                        <h5>${group.name}</h5>
                        <p class="text-muted">${group.description}</p>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small class="text-muted">Created by ${creatorName}</small>
                            <span class="badge ${group.privacy === 'public' ? 'bg-success' : 'bg-warning'}">
                                ${group.privacy === 'public' ? 'Public' : 'Private'}
                            </span>
                        </div>
                        <div class="group-members">
                            ${group.members.slice(0, 3).map(memberId => {
        const member = getUserById(memberId);
        return member ? `<img src="${member.profilePicture || randomProfilePics[0]}" class="member-avatar" alt="${member.name}">` : '';
    }).join('')}
                            ${group.members.length > 3 ? `<span class="member-count">+${group.members.length - 3} more</span>` : ''}
                        </div>
                        <div class="mt-3">
                            ${isMember ?
            `<button class="btn btn-outline-danger btn-sm leave-group-btn" data-group-id="${group.id}">Leave Group</button>` :
            `<button class="btn btn-primary btn-sm join-group-btn" data-group-id="${group.id}">Join Group</button>`
        }
                        </div>
                    </div>
                </div>
            `;

    return groupElement;
}

function createGroup() {
    const modal = new bootstrap.Modal(document.getElementById('createGroupModal'));
    modal.show();
}

function saveGroup() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const groupName = document.getElementById('groupName');
    const groupDescription = document.getElementById('groupDescription');
    const groupPrivacy = document.getElementById('groupPrivacy');

    if (!groupName.value.trim()) {
        alert('Please enter a group name.');
        return;
    }

    const newGroup = {
        id: generateId(),
        name: groupName.value,
        description: groupDescription.value,
        privacy: groupPrivacy.value,
        members: [currentUser.id],
        createdBy: currentUser.id,
        createdAt: new Date().toISOString()
    };

    const groups = getStorageData('visualbook_groups');
    groups.push(newGroup);
    saveStorageData('visualbook_groups', groups);

    loadMyGroups();
    loadDiscoverGroups();
    loadGroupSuggestions();
    loadProfileGroups();

    const modal = bootstrap.Modal.getInstance(document.getElementById('createGroupModal'));
    modal.hide();
    document.getElementById('createGroupForm').reset();

    alert('Group created successfully!');
}

function joinGroup(groupId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const groups = getStorageData('visualbook_groups');
    const groupIndex = groups.findIndex(g => g.id === groupId);

    if (groupIndex === -1) return;

    if (!groups[groupIndex].members.includes(currentUser.id)) {
        groups[groupIndex].members.push(currentUser.id);
    }

    saveStorageData('visualbook_groups', groups);

    loadMyGroups();
    loadDiscoverGroups();
    loadGroupSuggestions();
    loadProfileGroups();

    alert('You have joined the group!');
}

function leaveGroup(groupId) {
    if (!confirm('Are you sure you want to leave this group?')) return;

    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const groups = getStorageData('visualbook_groups');
    const groupIndex = groups.findIndex(g => g.id === groupId);

    if (groupIndex === -1) return;

    const memberIndex = groups[groupIndex].members.indexOf(currentUser.id);
    if (memberIndex !== -1) {
        groups[groupIndex].members.splice(memberIndex, 1);
    }

    if (groups[groupIndex].members.length === 0) {
        groups.splice(groupIndex, 1);
    }

    saveStorageData('visualbook_groups', groups);

    loadMyGroups();
    loadDiscoverGroups();
    loadGroupSuggestions();
    loadProfileGroups();

    alert('You have left the group.');
}

// ==================== POSTS PAGE ====================
function initPosts() {
    loadPostsPage('all');
}

function loadPostsPage(filter = 'all') {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    let posts = getStorageData('visualbook_posts');
    const users = getStorageData('visualbook_users');

    if (filter === 'friends') {
        posts = posts.filter(post =>
            currentUser.friends.includes(post.userId) || post.userId === currentUser.id
        );
    } else if (filter === 'my') {
        posts = posts.filter(post => post.userId === currentUser.id);
    }

    posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    const postsList = document.getElementById('postsList');
    if (postsList) {
        postsList.innerHTML = '';

        if (posts.length === 0) {
            postsList.innerHTML = `
                        <div class="text-center py-5">
                            <i class="fas fa-newspaper fa-3x text-muted mb-3"></i>
                            <h5>No posts found</h5>
                            <p class="text-muted">${filter === 'my' ? 'You haven\'t created any posts yet.' : 'No posts match your current filter.'}</p>
                        </div>
                    `;
            return;
        }

        posts.forEach(post => {
            const user = users.find(u => u.id === post.userId);
            if (!user) return;

            const postElement = createPostElement(post, user, currentUser);
            postsList.appendChild(postElement);
        });
    }
}

// ==================== POST ACTIONS ====================
function createPost(content, feeling = '', location = '', imageInput = null) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const newPost = {
        id: generateId(),
        userId: currentUser.id,
        content,
        feeling,
        location,
        image: null,
        likes: [],
        comments: [],
        shares: 0,
        timestamp: new Date().toISOString()
    };

    if (imageInput && imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            newPost.image = e.target.result;
            savePost(newPost);
        };

        reader.readAsDataURL(file);
    } else {
        savePost(newPost);
    }
}

function savePost(post) {
    const posts = getStorageData('visualbook_posts');
    posts.push(post);
    saveStorageData('visualbook_posts', posts);
    loadPosts();
    if (document.getElementById('postsList')) loadPostsPage();
}

function createStory(imageInput) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const newStory = {
            id: generateId(),
            userId: currentUser.id,
            image: e.target.result,
            timestamp: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };

        const stories = getStorageData('visualbook_stories');
        stories.push(newStory);
        saveStorageData('visualbook_stories', stories);
        loadStories();
    };

    reader.readAsDataURL(file);
}

function toggleLike(postId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const posts = getStorageData('visualbook_posts');
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) return;

    const post = posts[postIndex];
    const likeIndex = post.likes.indexOf(currentUser.id);

    if (likeIndex === -1) {
        post.likes.push(currentUser.id);
    } else {
        post.likes.splice(likeIndex, 1);
    }

    saveStorageData('visualbook_posts', posts);
    loadPosts();
    if (document.getElementById('postsList')) loadPostsPage();
    if (document.getElementById('profilePosts')) loadProfilePosts();
}

function addComment(postId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const comment = prompt('Enter your comment:');
    if (!comment || !comment.trim()) return;

    const posts = getStorageData('visualbook_posts');
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) return;

    posts[postIndex].comments.push({
        userId: currentUser.id,
        content: comment.trim(),
        timestamp: new Date().toISOString()
    });

    saveStorageData('visualbook_posts', posts);
    loadPosts();
    if (document.getElementById('postsList')) loadPostsPage();
    if (document.getElementById('profilePosts')) loadProfilePosts();
}

function sharePost(postId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const posts = getStorageData('visualbook_posts');
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) return;

    posts[postIndex].shares += 1;
    saveStorageData('visualbook_posts', posts);
    loadPosts();
    if (document.getElementById('postsList')) loadPostsPage();
    if (document.getElementById('profilePosts')) loadProfilePosts();

    alert('Post shared successfully!');
}

function deletePost(postId) {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const posts = getStorageData('visualbook_posts');
    const updatedPosts = posts.filter(p => p.id !== postId);

    saveStorageData('visualbook_posts', updatedPosts);
    loadPosts();
    if (document.getElementById('postsList')) loadPostsPage();
    if (document.getElementById('profilePosts')) loadProfilePosts();
}

function acceptFriendRequest(userId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const users = getStorageData('visualbook_users');
    const currentUserIndex = users.findIndex(u => u.id === currentUser.id);
    const requesterIndex = users.findIndex(u => u.id === userId);

    if (currentUserIndex === -1 || requesterIndex === -1) return;

    const requestIndex = users[currentUserIndex].friendRequests.indexOf(userId);
    if (requestIndex !== -1) {
        users[currentUserIndex].friendRequests.splice(requestIndex, 1);
    }

    if (!users[currentUserIndex].friends.includes(userId)) {
        users[currentUserIndex].friends.push(userId);
    }

    if (!users[requesterIndex].friends.includes(currentUser.id)) {
        users[requesterIndex].friends.push(currentUser.id);
    }

    saveStorageData('visualbook_users', users);
    setCurrentUser(users[currentUserIndex]);
    loadFriendRequests();
    loadFriends();
    loadProfileFriends();
}

function rejectFriendRequest(userId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const users = getStorageData('visualbook_users');
    const currentUserIndex = users.findIndex(u => u.id === currentUser.id);

    if (currentUserIndex === -1) return;

    const requestIndex = users[currentUserIndex].friendRequests.indexOf(userId);
    if (requestIndex !== -1) {
        users[currentUserIndex].friendRequests.splice(requestIndex, 1);
    }

    saveStorageData('visualbook_users', users);
    setCurrentUser(users[currentUserIndex]);
    loadFriendRequests();
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hr ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    return date.toLocaleDateString();
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', function () {
    initializeStorage();
    checkAuthStatus();

    // Auth forms
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Post creation
    document.getElementById('createPostBtn').addEventListener('click', function () {
        const postContent = document.getElementById('postInput').value;
        if (postContent.trim()) {
            createPost(postContent);
            document.getElementById('postInput').value = '';
        } else {
            const modal = new bootstrap.Modal(document.getElementById('createPostModal'));
            modal.show();
        }
    });

    document.getElementById('postsPageCreatePostBtn').addEventListener('click', function () {
        const postContent = document.getElementById('postsPagePostInput').value;
        if (postContent.trim()) {
            createPost(postContent);
            document.getElementById('postsPagePostInput').value = '';
        } else {
            const modal = new bootstrap.Modal(document.getElementById('createPostModal'));
            modal.show();
        }
    });

    document.getElementById('submitPostBtn').addEventListener('click', function () {
        const content = document.getElementById('postContent').value;
        const feeling = document.getElementById('postFeeling').value;
        const location = document.getElementById('postLocation').value;
        const imageInput = document.getElementById('postImage');

        createPost(content, feeling, location, imageInput);

        const modal = bootstrap.Modal.getInstance(document.getElementById('createPostModal'));
        modal.hide();
        document.getElementById('postForm').reset();
    });

    // Stories
    document.getElementById('addStoryBtn').addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById('addStoryModal'));
        modal.show();
    });

    document.getElementById('submitStoryBtn').addEventListener('click', function () {
        const imageInput = document.getElementById('storyImage');

        if (imageInput.files.length > 0) {
            createStory(imageInput);

            const modal = bootstrap.Modal.getInstance(document.getElementById('addStoryModal'));
            modal.hide();
            document.getElementById('storyForm').reset();
        } else {
            alert('Please select an image for your story.');
        }
    });

    // Profile
    document.getElementById('editProfileBtn').addEventListener('click', editProfile);
    document.getElementById('saveProfileBtn').addEventListener('click', saveProfile);

    // Groups
    document.getElementById('createGroupBtn').addEventListener('click', createGroup);
    document.getElementById('createGroupBtn2').addEventListener('click', createGroup);
    document.getElementById('saveGroupBtn').addEventListener('click', saveGroup);

    // Profile picture change
    document.getElementById('profilePictureInput').addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const editProfileAvatar = document.getElementById('editProfileAvatar');
                if (editProfileAvatar) {
                    editProfileAvatar.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // Event delegation for dynamic elements
    document.addEventListener('click', function (e) {
        // Post actions
        const target = e.target.closest('.like-btn, .comment-btn, .share-btn, .delete-btn');
        if (target) {
            const postId = parseInt(target.dataset.postId);

            if (target.classList.contains('like-btn')) {
                toggleLike(postId);
            } else if (target.classList.contains('comment-btn')) {
                addComment(postId);
            } else if (target.classList.contains('share-btn')) {
                sharePost(postId);
            } else if (target.classList.contains('delete-btn')) {
                deletePost(postId);
            }
        }

        // Friend requests
        const requestTarget = e.target.closest('.accept-request, .reject-request');
        if (requestTarget) {
            const userId = parseInt(requestTarget.dataset.userId);

            if (requestTarget.classList.contains('accept-request')) {
                acceptFriendRequest(userId);
            } else if (requestTarget.classList.contains('reject-request')) {
                rejectFriendRequest(userId);
            }
        }

        // Group actions
        const groupTarget = e.target.closest('.join-group-btn, .leave-group-btn');
        if (groupTarget) {
            const groupId = parseInt(groupTarget.dataset.groupId);

            if (groupTarget.classList.contains('join-group-btn')) {
                joinGroup(groupId);
            } else if (groupTarget.classList.contains('leave-group-btn')) {
                leaveGroup(groupId);
            }
        }

        // Post filters
        const filterTarget = e.target.closest('[data-filter]');
        if (filterTarget) {
            e.preventDefault();
            const filter = filterTarget.getAttribute('data-filter');
            loadPostsPage(filter);

            const dropdownToggle = document.querySelector('.dropdown-toggle');
            if (dropdownToggle) {
                dropdownToggle.textContent = filterTarget.textContent;
            }
        }
    });
});