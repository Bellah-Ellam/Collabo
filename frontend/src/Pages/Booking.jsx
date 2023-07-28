import React, { useContext } from 'react';
import { BookingsContext } from '../Context/BookingsContext';
import { AuthContext } from '../Context/AuthContext';

const Booking = () => {
  const { bookings } = useContext(BookingsContext);
  const {currentUser} = useContext(AuthContext)

  // Filter bookings to show only the bookings of the current user
  const userBookings = bookings.filter(booking => booking.user_id === currentUser.id);

  return (
    <div>
      <h1>My Property Bookings</h1>
      {userBookings.length === 0 ? 
        (
          <p>No bookings found.</p>
        ) 
      : 
        (
          <div className="booking-list">
            {userBookings.map((booking) => (
              <div className="booking-item" key={booking.id}>
                {/* <h3>{booking.property.name}</h3>
                <p>{booking.checkInDate} - {booking.checkOutDate}</p>
                <p>Guests: {booking.numGuests}</p> */}
                <p>Total Price: {booking.price}</p>
              </div>
            ))}
          </div>
        )
      }

    </div>
  );
};

export default Booking;
