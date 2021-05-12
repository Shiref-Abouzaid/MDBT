<template>
  <section class="car-form">
    <div class="container">
      <div class="form-content">
        <h3>Add Car</h3>
        <form>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="cartype">Car Type</label>
              <select id="cartype" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="carmodel">Car Model</label>
              <select id="carmodel" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="rental">Rental Period</label>
              <select id="rental" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="bodytype">Body Type</label>
              <select id="bodytype" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="transmission">Transmission</label>
              <select id="transmission" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="color">Color</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="color"
              />
            </div>
          </div>

          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="carname">Car Name</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="carname"
              />
            </div>
            <div class="form-group col-md-5">
              <label for="price">Price</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="price"
              />
            </div>
          </div>

          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="year">Manufacturer Year</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="year"
              />
            </div>
            <div class="form-group col-md-5">
              <label for="mobilenum">Mobile Number</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="mobilenum"
              />
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="image">Cover Image</label>
                 <div class="text-field">
              <input type="file" id="image" />
                <label for="image" class="label-file">Choose File</label>
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
              <label for="photo">Car Photos</label>
               <div class="text-field">
              <input type="file" id="photo" />
                   <label for="photo" class="label-file">Choose File</label>
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
              <label for="city">city</label>
              <select id="city" class="form-control form-control-lg">
                <option>choose Type</option>
                <option>syria</option>
              </select>
            </div>
          </div>
         <div class="form-row justify-content-center">
            <div class="form-group col-11">
              <label for="activity">Business Activity</label>
              <textarea
                class="form-control"
                id="activity"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div class="checkbox">
             <b-form-checkbox>Has Driver</b-form-checkbox>
             </div>
          <div class="btn-section">
         
            <button class="car-btn">Add Car</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>