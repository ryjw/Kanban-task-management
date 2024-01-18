# API documentation

## POST /api/user/register

### Request:

```js
fetch("/api/user/register", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify({
        username: "hara"
        password: 123
    }),
}
);
```

### Response:

```js
{
  "success": true,
  "message": "Welcome hara!"
}
```

## POST /api/user/login

### Request:

```js
fetch("/api/user/register", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify({
        username: "hara"
        password: 123
    }),
}
);
```

### Response:

```js
{
  "success": true,
  "message": "You're successfully logged in"
}
```

## GET /api/board

Gets only the boards created by that user

### Request:

```js
fetch("/api/board");
```

### Response:

```js
{
  "boards": [
    {
      "id": "6ecb6acc-9c28-4a54-83c8-3e4e6103f9cf",
      "name": "writing",
      "userId": "09152012-f0bc-43bc-9f9a-5ca3a5e7c8c0",
      "columns": []
    },
    {
      "id": "d6504a98-953a-48fb-a3e2-9475ee553ce7",
      "name": "programming",
      "userId": "09152012-f0bc-43bc-9f9a-5ca3a5e7c8c0",
      "columns": [
        {
          "id": "77c002c0-4012-477e-b556-d6f86cf9b6f7",
          "name": "todo",
          "boardId": "d6504a98-953a-48fb-a3e2-9475ee553ce7",
          "tasks": [
            {
              "id": "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
              "name": "code frontend",
              "description": "",
              "columnId": "77c002c0-4012-477e-b556-d6f86cf9b6f7",
              "subtasks": [
                {
                  "id": "5d459203-307b-4168-9fdc-add58122ed2f",
                  "name": "create form validation",
                  "taskId": "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                  "isFulfilled": false
                },
                {
                  "id": "c8b490b1-0489-4c60-a918-d818eb7cf50b",
                  "name": "write UI components",
                  "taskId": "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                  "isFulfilled": false
                },
                {
                  "id": "ff05d673-03cd-40e7-a084-bdef419e32ed",
                  "name": "make use of state",
                  "taskId": "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                  "isFulfilled": false
                }
              ]
            }
          ]
        },
        {
          "id": "a949a1ac-e734-4422-bfb6-2b353c9b777d",
          "name": "done",
          "boardId": "d6504a98-953a-48fb-a3e2-9475ee553ce7",
          "tasks": [
            {
              "id": "c0af8ec2-da9e-4197-b12b-11b1b31bf2e0",
              "name": "code backend",
              "description": "",
              "columnId": "a949a1ac-e734-4422-bfb6-2b353c9b777d",
              "subtasks": []
            },
            {
              "id": "dc5308a4-c34a-474a-9e19-59bc5097b30e",
              "name": "research",
              "description": "",
              "columnId": "a949a1ac-e734-4422-bfb6-2b353c9b777d",
              "subtasks": []
            }
          ]
        },
        {
          "id": "ad0f2103-8d95-48e8-91b9-ffdc1204a7da",
          "name": "doing",
          "boardId": "d6504a98-953a-48fb-a3e2-9475ee553ce7",
          "tasks": [
            {
              "id": "fe30d4b7-cba3-49ec-8328-892538097432",
              "name": "write API doc",
              "description": "list out the requests and responses",
              "columnId": "ad0f2103-8d95-48e8-91b9-ffdc1204a7da",
              "subtasks": []
            }
          ]
        }
      ]
    }
  ]
}
```

## POST /api/board

To create a new board

### Request:

```js
fetch("/api/board", {
    method: "POST".
      headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify({
    name: "Build a sandcastle",
  }),
});
```

### Response:

```js
{
  "success": true,
  "board": {
    "id": "d5abc1bd-f900-48fb-bc78-159d4397b6f7",
    "name": "Build a sandcastle",
    "userId": "09152012-f0bc-43bc-9f9a-5ca3a5e7c8c0"
  }
}
```

## PATCH /api/board

To change the name of the board

### Request:

```js
fetch("/api/board", {
    method: "PATCH".
      headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify({
    name: "Updated name",
    id: "6ecb6acc-9c28-4a54-83c8-3e4e6103f9cf" //board ID goes here
  }),
});
```

### Response:

```js
{
  "success": true,
  "board": {
    "id": "6ecb6acc-9c28-4a54-83c8-3e4e6103f9cf",
    "name": "Updated name",
    "userId": "09152012-f0bc-43bc-9f9a-5ca3a5e7c8c0"
  }
}
```

## DELETE /api/board

### Request:

```js
fetch("/api/board", {
    method: "DELETE".
      headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify({
    id: "6ecb6acc-9c28-4a54-83c8-3e4e6103f9cf",
  }),
});
```

### Response:

```js
{
  "success": true,
  "board": {
    "id": "6ecb6acc-9c28-4a54-83c8-3e4e6103f9cf",
    "name": "Updated name",
    "userId": "09152012-f0bc-43bc-9f9a-5ca3a5e7c8c0"
  }
}
```
