// Filter buttons: toggle active state
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    const group = this.closest('.filter-options');
    if (!group) return;
    group.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('filter-btn--active'));
    this.classList.add('filter-btn--active');
  });
});
