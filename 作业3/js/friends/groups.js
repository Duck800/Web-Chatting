// 用于存储群聊信息的数据结构
let groups = [];

// 从 LocalStorage 中加载数据
function loadGroupsFromLocalStorage() {
  const groupsString = localStorage.getItem('groups');
  if (groupsString) {
    groups = JSON.parse(groupsString);
  }
}

// 将群聊数据保存到 LocalStorage 中
function saveGroupsToLocalStorage() {
  localStorage.setItem('groups', JSON.stringify(groups));
}

// 创建群聊
function createGroup(name, members) {
  const group = {
    name: name,
    members: members
  };
  groups.push(group);
  saveGroupsToLocalStorage();
  return group;
}

// 根据群聊名称查找群聊
function findGroupByName(name) {
  return groups.find(group => group.name === name);
}

// 添加成员到群聊
function addMemberToGroup(group, member) {
  group.members.push(member);
  saveGroupsToLocalStorage();
}

// 从群聊中移除成员
function removeMemberFromGroup(group, member) {
  const index = group.members.indexOf(member);
  if (index !== -1) {
    group.members.splice(index, 1);
    saveGroupsToLocalStorage();
  }
}

// 导出模块的方法
module.exports = {
  loadGroupsFromLocalStorage,
  createGroup,
  findGroupByName,
  addMemberToGroup,
  removeMemberFromGroup
};