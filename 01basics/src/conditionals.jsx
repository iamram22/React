let content;

//JS conditionals can abe written in React

if (isLoggedIn) {
    content = <AdminPanel/>
} else {
    content = <LoginForm/>
}

return (
    <div>
        {content}
    </div>
)