<template>
  <section class="product-form">
    <div class="container">
      <div class="product-content">
        <h3>Add Product</h3>
        <form>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="category">Category</label>
              <select id="category" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="title"
              />
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="price">Price</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="price"
              />
            </div>
            <div class="form-group col-md-5">
              <label for="phone">phone</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="phone"
              />
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="logo">Company Logo</label>
              <div class="text-field">
                <input
                  type="file"
              
                  id="logo"
                />
                <label for="logo" class="label-file">Choose File</label>
              </div>
                     <div class="row">
                <div class="col-md-3">
                  <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
               
              </div>
            </div>
            <div class="form-group col-md-5">
              <label for="photos">Company Photos</label>
               <div class="text-field">
              <input type="file" id="photos" />
                <label for="photos" class="label-file">Choose File</label>
               </div>
                      <div class="row">
                <div class="col-md-3">
                  <div class="gallery-box">
                  <div class="gallery">
                    <img class="image" src="/images/person.jpeg" alt="">
                  </div>
                  <img class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="country">Country</label>
              <select id="country" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="city">City</label>
              <select id="city" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
          </div>
          <div class="form-row justify-content-center">
            <div class="form-group col-11">
              <label for="activity">Business Activity</label>
              <textarea class="form-control" id="activity" rows="4"></textarea>
            </div>
          </div>
          <div class="btn-section">
            <button class="product-btn">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>